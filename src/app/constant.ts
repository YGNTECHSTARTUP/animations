

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
  { key: "key1", imgurl: "/assets/apple_vision_pros.png", alt: "Apple Vision Pros" },
  // { key: "key2", imgurl: "/assets/book.png", alt: "Book" },
  { key: "key3", imgurl: "/assets/Macbook.png", alt: "Macbook" },
  // { key: "key4", imgurl: "/assets/mobile.png", alt: "Mobile" },
  { key: "key5", imgurl: "/assets/mobile2.png", alt: "Mobile 2" },
  { key: "key6", imgurl: "/assets/Playstation.png", alt: "Playstation" },
  { key: "key7", imgurl: "/assets/sony tv.png", alt: "Sony TV" },
  { key: "key8", imgurl: "/assets/watch.png", alt: "Watch" },
  // Add more objects as needed
];

export const productimages: Imagee[] = [
  { key: "key1", imgurl: "/assets/product1.png", alt: "product1" },
  // { key: "key2", imgurl: "/assets/product2.png", alt: "product2" },
  { key: "key3", imgurl: "/assets/product3.png", alt: "product3" },
  { key: "key4", imgurl: "/assets/product4.png", alt: "product4" },
  { key: "key5", imgurl: "/assets/product5.png", alt: "product5" },
  { key: "key6", imgurl: "/assets/product6.png", alt: "product6" },
  { key: "key7", imgurl: "/assets/product7.png", alt: "product7" },
  { key: "key8", imgurl: "/assets/product8.png", alt: "product8" },
  { key: "key9", imgurl: "/assets/product9.png", alt: "product9" },
  // { key: "key10", imgurl: "/assets/product10.png", alt: "product10" },
  { key: "key11", imgurl: "/assets/product11.png", alt: "product11" },
  { key: "key12", imgurl: "/assets/product12.png", alt: "product12" },
  { key: "key13", imgurl: "/assets/product13.png", alt: "product13" },
  // { key: "key14", imgurl: "/assets/product14.png", alt: "product14" },
  { key: "key15", imgurl: "/assets/product15.png", alt: "product15" },
  { key: "key16", imgurl: "/assets/product16.png", alt: "product16" },
  // { key: "key17", imgurl: "/assets/product17.png", alt: "product17" },
  { key: "key18", imgurl: "/assets/product18.png", alt: "product18" },
  { key: "key19", imgurl: "/assets/product19.png", alt: "product19" },
  // { key: "key20", imgurl: "/assets/product20.png", alt: "product20" },
];





