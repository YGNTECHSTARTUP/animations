import { defineConfig } from "drizzle-kit";
import "dotenv/config"

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,

  },
  verbose:true,
  strict:true
});
