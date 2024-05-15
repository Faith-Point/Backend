const cache = {
    redis: {
      driver: 'redis',
      host: process.env.REDIS_HOST || 'faith-point-redis',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
    },
    expire: 28800, // Expiration time in seconds
  };
  
  export default cache;
  