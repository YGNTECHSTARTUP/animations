/* eslint-disable no-undef */
"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { scrapeAmazonsProduct } from '@/lib/actions';
import { useRouter } from 'next/navigation';



const SearchHeader = () => {
  const router = useRouter();
  const [productUrl, setProductUrl] = useState('');

  const handleScrape = async (url: string) => {
    try {
      const productData = await scrapeAmazonsProduct(url);
      if (productData) {
        console.log('Product Details:', productData);
        const query = new URLSearchParams({
          currency: productData.currency,
          productAvailability: productData.productAvailability.toString(), // Convert to string
          productImage: productData.productImage,
          productPrice: productData.productPrice.toString(),
          productReviews: productData.productReviews.toString(), // Convert to string
          productStars: productData.productStars.toString(),
          productTitle: productData.productTitle,
          productURL: productData.productURL,
          productdiscountRate: productData.productdiscountRate?.toString() || '',
        });

        router.push(`/product?${query.toString()}`)
      }
    } catch (error) {
      console.error('Error scraping product:', error);
      // Consider adding user-friendly error notification here
    }
  };

  const handleScrapeClick = async () => {
    if (!productUrl) {
      alert('Please Enter a Valid Product URL');
      return; // Prevent unnecessary scraping if URL is empty
    }
    await handleScrape(productUrl);
  };

  return (
    <div className=''>
      <div className=''>
        <form>
          <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
          <div className="relative w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg className="h-4 w-4 text-muted-foreground" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <div className='flex'>
              <Input
                type="search"
                id="default-search"
                className="block rounded-sm border-2 border-regalpurple bg-muted p-4 ps-10 text-sm text-muted-foreground ring-2 focus:border-regalpurple focus:ring-4 focus:ring-regalpurple focus:ring-offset-2"
                placeholder="Search..."
                onChange={(e) => setProductUrl(e.target.value)}
                required
              />
              <Button
                className="ml-2"
                type="button"
                size={"lg"}
                variant={"default"}
                onClick={handleScrapeClick}
              >
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchHeader;
