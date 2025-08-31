/** @type {import('next').NextConfig} */
const nextConfig = {
  "@tailwindcss/postcss": {},
  env:{
    API_URL:"http://localhost:3000",
    DB_URI:"mongodb+srv://alok:alok12@cluster0.aml5dsl.mongodb.net/ecommerce"
  },
  images:{
    domains:["res.cloudinary.com"],
  }
};

export default nextConfig;
