// next.config.js

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['proxy.vnxservers.com', 'shop.tazreemart.com'],
  },
  env: {
    shopLink: 'https://shop.tazreemart.com/index.php/wp-json/wc/v3/',
    shopLink2: 'https://shop.tazreemart.com/index.php/wp-json/productfiltercat/v1/product/category/',
    key: 'consumer_key=ck_99ddb89db91e4691a163af42f098a1b00c482041&consumer_secret=cs_5738b6a3295a0ba1fbf3852977eb03b50fa018c8',
    consumer_key: 'ck_99ddb89db91e4691a163af42f098a1b00c482041',
    consumer_secret: 'cs_5738b6a3295a0ba1fbf3852977eb03b50fa018c8',
    ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    JsonKey: 'Q>>/}9xTmz>JgY|'
  },
}

module.exports = nextConfig
