import { createClient, RedisClientType } from 'redis';

declare global {
  var redisClient: RedisClientType | undefined;
}

let redisClient: RedisClientType;

if (!global.redisClient) {
  redisClient = createClient({ url: process.env.REDIS_URL });
  redisClient.connect();
  global.redisClient = redisClient;
} else {
  redisClient = global.redisClient;
}

export default redisClient;
