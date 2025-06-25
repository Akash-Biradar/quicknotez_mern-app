// npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv"
dotenv.config();
// 100 req  60 second 
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s")
})

export default ratelimit;