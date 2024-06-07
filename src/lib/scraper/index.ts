"use server"
import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractPrice } from "../utils";

export async function scrapeAmazonProduct(productURL: string) {
  if (!productURL) return;

  const username: string = "brd-customer-hl_d99e8d19-zone-pricify"
  const password: string = "nz19jzn288ia"
  const port: number = 22225;
  const session_id = (10000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };
  try {
  
    const res = await axios.get(productURL,options);
    // console.log(res.data)
     const $ = cheerio.load(res.data)
     const title = $('#productTitle').text().trim();
     const currentprice = $('.priceToPay span.a-price-whole')
    
     const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable'
     const images = $("#landingImage").attr("data-a-dynamic-image") || "{}";
     const productImageURLs = Object.keys(JSON.parse(images));
    //  const currency = extractCurrency($(".a-price-symbol"));
     const discountRate = $(".savingsPercentage").text().replace(/[-%]/g, "");
     const reviewCount = $(".averageStarRatingNumerical")
       .text()
       .replace(/[\D]/g, "");
     const stars = $(".AverageCustomerReviews").text().slice(0, 3);
     console.log(title,currentprice,outOfStock,images,productImageURLs,discountRate,reviewCount)
     const productData = {
      productTitle:title,
      productPrice:Number(currentprice),
      productAvailability:!outOfStock,
      productURL,
      productImage:productImageURLs[6],
      productdiscountRate:Number(discountRate),
      productReviews:Number(reviewCount),
      productStars:Number(stars),
      currency:"₹",
     }
     return productData
    } catch (error) {
    if (error instanceof Error)

      throw new Error(`BRIGHT_DATA_PRODUCT_FETCH_FAIL:${error.message}`);
     
  }
}