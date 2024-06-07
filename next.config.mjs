/** @type {import('next').NextConfig} */
import withPwa from 'next-pwa'

const nextConfig = withPwa({
  dest: "public", disable: process.env.NODE_ENV === "development" ,
});

export default nextConfig;
