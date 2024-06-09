

export const clerkcredentials:string[] = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVmaW5lZC1naXJhZmZlLTcxLmNsZXJrLmFjY291bnRzLmRldiQ",
"CLERK_SECRET_KEY=sk_test_UfCAqNJxO4qmYS2gvdeLqLNljPNe9ZsgKo8pcGQgmV",
"NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in",
"NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up",
"NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/",
"NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/",
]
interface Imagee {
  key: `key${number}`;
  imgurl: string;
  alt:string
}
export interface ProductData {
  productTitle: string;
  productPrice: string;
  productAvailability: boolean;
  productURL: string;
  productImage: string;
  productdiscountRate: number;
  productReviews: number;
  productStars: string;
  currency: string;
}
export const heroImages: Imagee[] = [
  { key: "key1", imgurl: "/assetsx/apple_vision_pros.png", alt: "Apple Vision Pros" },
  // { key: "key2", imgurl: "/assetsx/book.png", alt: "Book" },
  { key: "key3", imgurl: "/assetsx/Macbook.png", alt: "Macbook" },
  // { key: "key4", imgurl: "/assetsx/mobile.png", alt: "Mobile" },
  { key: "key5", imgurl: "/assetsx/mobile2.png", alt: "Mobile 2" },
  { key: "key6", imgurl: "/assetsx/Playstation.png", alt: "Playstation" },
  { key: "key7", imgurl: "/assetsx/sony tv.png", alt: "Sony TV" },
  { key: "key8", imgurl: "/assetsx/watch.png", alt: "Watch" },
  // Add more objects as needed
];

export const productimages: Imagee[] = [
  { key: "key1", imgurl: "/assetsx/product1.png", alt: "product1" },
  // { key: "key2", imgurl: "/assetsx/product2.png", alt: "product2" },
  { key: "key3", imgurl: "/assetsx/product3.png", alt: "product3" },
  { key: "key4", imgurl: "/assetsx/product4.png", alt: "product4" },
  { key: "key5", imgurl: "/assetsx/product5.png", alt: "product5" },
  { key: "key6", imgurl: "/assetsx/product6.png", alt: "product6" },
  { key: "key7", imgurl: "/assetsx/product7.png", alt: "product7" },
  { key: "key8", imgurl: "/assetsx/product8.png", alt: "product8" },
  { key: "key9", imgurl: "/assetsx/product9.png", alt: "product9" },
  // { key: "key10", imgurl: "/assetsx/product10.png", alt: "product10" },
  { key: "key11", imgurl: "/assetsx/product11.png", alt: "product11" },
  { key: "key12", imgurl: "/assetsx/product12.png", alt: "product12" },
  { key: "key13", imgurl: "/assetsx/product13.png", alt: "product13" },
  // { key: "key14", imgurl: "/assetsx/product14.png", alt: "product14" },
  { key: "key15", imgurl: "/assetsx/product15.png", alt: "product15" },
  { key: "key16", imgurl: "/assetsx/product16.png", alt: "product16" },
  // { key: "key17", imgurl: "/assetsx/product17.png", alt: "product17" },
  { key: "key18", imgurl: "/assetsx/product18.png", alt: "product18" },
  { key: "key19", imgurl: "/assetsx/product19.png", alt: "product19" },
  // { key: "key20", imgurl: "/assetsx/product20.png", alt: "product20" },
];





