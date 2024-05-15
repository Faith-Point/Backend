import CacheRedis from '@shared/cache/CacheRedis';

class UserCacheService {
  public static async execute(key: string, data: unknown): Promise<void> {
    await new CacheRedis().save(key, data);
  }
}

export default UserCacheService;
