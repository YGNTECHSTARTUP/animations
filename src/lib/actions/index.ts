"use server"
// import { scrapeProduct } 
import {scrapeAmazonProduct} from "../scraper"
export const scrapeAmazonsProduct = async (productUrl:string) => {
    // console.log(productUrl)
  if(!productUrl) return 
  try{
     const scrapedAmazondProduct =  scrapeAmazonProduct(productUrl)
     return scrapedAmazondProduct
  }
  catch(e){
    console.log("Error")
  }
}