import { createClient, RedisClientType } from 'redis';
import cache from '@config/cache';
import CacheConfig from '@shared/cache/CacheConfig';

class CacheRedis {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: CacheConfig.config.redis.url
    });
    this.client.connect();
  }

  public async save<T>(key: string, value: T, expireat?: number | undefined): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
    await this.setTheKeyExpirationTime(key, expireat || cache.expire);
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;
    return parsedData;
  }

  public async match(partialKey: string): Promise<string[]> {
    const keys = await this.client.keys(`*${partialKey}*`);
    return keys;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async modify<T>(key: string, value: T): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  private async setTheKeyExpirationTime(key: string, expireat: number | undefined): Promise<void> {
    await this.client.expire(key, expireat === undefined ? cache.expire : expireat);
  }
}

export default CacheRedis;
