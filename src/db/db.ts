import { config } from "dotenv";
import * as schema from "./schema"
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
config({path:'.env'})
export const sql = neon('postgresql://pricify_owner:9En6UpKLejwo@ep-rapid-brook-a5kcbrrt.us-east-2.aws.neon.tech/pricify?sslmode=require')
export const db = drizzle(sql,{schema})