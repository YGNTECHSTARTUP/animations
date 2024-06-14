CREATE TABLE IF NOT EXISTS "schema" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"availability" boolean NOT NULL,
	"url" varchar(2048) NOT NULL,
	"image" varchar(2048) NOT NULL,
	"discountRate" integer NOT NULL,
	"reviews" integer NOT NULL,
	"stars" integer NOT NULL
);
