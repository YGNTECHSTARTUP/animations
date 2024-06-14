import { boolean, integer,  pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Data = pgTable('data',{
title:varchar('title',{
   length:1024
}).unique(),
 id:serial('id').primaryKey(),
    availability:boolean('availability').notNull(),
    url:varchar('url',{length:2048}).notNull(),
    image:varchar('image',{length:2048}).notNull(),
    discountRate:integer('discountRate').notNull(),
    reviews:integer('reviews').notNull(),
    stars:varchar('stars').notNull(),
    price:varchar('price').notNull(),
   currency:varchar('currency').notNull()
})
