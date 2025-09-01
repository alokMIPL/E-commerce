/** @type {import('next').NextConfig} */
const nextConfig = {
  "@tailwindcss/postcss": {},
  env:{
    API_URL:"http://localhost:3000",
    DB_URI:"mongodb+srv://alok:alok12@cluster0.aml5dsl.mongodb.net/ecommerce",

    CLOUD_NAME: "dc0wr8hev",
    CLOUDINARY_API_KEY: "564466854761365",
    CLOUDINARY_API_SECRET: "2SxZlwIQSG8-jsYrikGpQgaYUXo",

    NEXTAUTH_SECRET:"asfdasdgs!@##$2342152345"
  },
  images:{
    domains:["res.cloudinary.com"],
  }
};

export default nextConfig;
