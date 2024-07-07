/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
         output: 'export',
           images: { unoptimized: true }  ,
           reactStrictMode:true,
           basePath:'/Portafolio',
           assetPrefix:'/Portafolio/'  
}
 
module.exports = nextConfig