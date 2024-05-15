import { RedisClientOptions } from 'redis';
import cache from '@config/cache';

interface ICacheConfig {
  config: {
    redis: RedisClientOptions;
  };
  driver: string;
}

const CacheConfig: ICacheConfig = {
  config: {
    redis: {
      url: `redis://${cache.redis.host}:${cache.redis.port}`
    }
  },
  driver: cache.redis.driver,
};

export default CacheConfig;
