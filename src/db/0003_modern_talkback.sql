ALTER TABLE "data" ALTER COLUMN "price" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "data" ALTER COLUMN "stars" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "data" ADD COLUMN "currency" varchar NOT NULL;