ALTER TABLE "data" ALTER COLUMN "title" SET DATA TYPE varchar(1024);--> statement-breakpoint
ALTER TABLE "data" ALTER COLUMN "title" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "data" ALTER COLUMN "price" SET DATA TYPE varchar(16);