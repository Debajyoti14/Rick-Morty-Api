/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  Images:{
    domain : ["https://rickandmortyapi.com/"],
    loaders:"custom",
    path:"/"
  },
}

module.exports = nextConfig
