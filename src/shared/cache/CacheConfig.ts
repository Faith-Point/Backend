import cache from '@config/cache';
import ICacheConfig from '@shared/cache/interfaces/ICacheConfig';

const CacheConfig: ICacheConfig = {
  config: {
    redis: {
      host: cache.redis.host,
      port: cache.redis.port,
    },
  },
  driver: cache.redis.driver,
};

export default CacheConfig;
