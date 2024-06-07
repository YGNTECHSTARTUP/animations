import React from 'react'

const Product = (productDetaild:{ productTitle:string,
    productPrice:number,
    productAvailability:boolean,
    productURL:string,
    productImage:string,
    productdiscountRate:number
    productReviews:number,
    productStars:number,
    currency:string}|undefined) => {
const {currency,productAvailability,productImage,productPrice,productReviews,productStars,productTitle,productURL,productdiscountRate} = productDetaild
return (
    <div>Product details 
        {
            productDetaild && (
                <div>
                    <h1>{productTitle}</h1>
                    <p>{productPrice}</p>
                    <p>{productAvailability}</p>
                    <p>{productImage}</p>
                    <p>{productReviews}</p>
                    <p>{productStars}</p>
                    <p>{productdiscountRate}</p>
                    <p>{currency}</p>
                </div>
            )
        }
    </div>
  )
}

export default Product