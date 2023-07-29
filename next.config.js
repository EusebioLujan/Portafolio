/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless', // Habilita el enrutador de aplicaciones (App Router)
    images: {
      domains: ['lottie.host'],
    },
    // Otras configuraciones si las tienes
  };
  
  module.exports = nextConfig;
