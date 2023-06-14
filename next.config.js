// next.config.js

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "proxy.vnxservers.com",
      "shop.tazreemart.com",
      "shop.abusayeeed.xyz",
    ],
  },
  env: {
    shopLink: "https://shop.abusayeeed.xyz/wp/wp-json/wc/v3/",
    shopLink2:
      "https://shop.abusayeeed.xyz/wp/wp-json/productfiltercat/v1/product/category/",
    key: "consumer_key=ck_7d700d7c05bea9f024076feb890944ad286703f2&consumer_secret=cs_59a8c6db54711f8a9fc314b95e0ad782a946c191",
    consumer_key: "ck_7d700d7c05bea9f024076feb890944ad286703f2",
    consumer_secret: "cs_59a8c6db54711f8a9fc314b95e0ad782a946c191",
    ACCESS_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    JsonKey: "Q>>/}9xTmz>JgY|",
  },
};

module.exports = nextConfig;
