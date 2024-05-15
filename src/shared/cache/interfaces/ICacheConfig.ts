import { RedisClientOptions } from 'redis';

interface ICacheConfig {
  config: {
    redis: RedisClientOptions;
  };
  driver: string;
}

export default ICacheConfig;
