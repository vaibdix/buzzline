import { Redis } from "@upstash/redis/nodejs";

export const db = Redis.fromEnv()

// export const db = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });


// export const db = new Redis({
//   url: 'process.env.UPSTASH_REDIS_REST_URL',
//   token: 'process.env.UPSTASH_REDIS_REST_TOKEN',
// })
   