import { db } from "../db";
import { Data } from "../schema";
import { ProductData } from "@/app/constant";

export async function createData(product: ProductData) {
    await db.insert(Data).values({
        title: product.productTitle,
        price:product.productPrice, // Convert the price value to a number
        availability: product.productAvailability,
        url: product.productURL,
        image: product.productImage,
        discountRate: product.productdiscountRate,
        reviews: product.productReviews,
        stars: product.productStars,
        currency: product.currency,
    });
}
