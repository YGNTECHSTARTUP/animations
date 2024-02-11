

export const clerkcredentials:string[] = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVmaW5lZC1naXJhZmZlLTcxLmNsZXJrLmFjY291bnRzLmRldiQ",
"CLERK_SECRET_KEY=sk_test_UfCAqNJxO4qmYS2gvdeLqLNljPNe9ZsgKo8pcGQgmV",
"NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in",
"NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up",
"NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/",
"NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/",
]
interface HeroImage {
  key: `key${number}`;
  imgurl: string;
  alt:string
}
export const heroImages: HeroImage[] = [
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





