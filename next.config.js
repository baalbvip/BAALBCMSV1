/** @type {import('next').NextConfig} */


const DOMAIN = "localhost"
const HTTP = "http://"
const URL = HTTP + DOMAIN;

const nextConfig = {
  reactStrictMode: true,
  env: {
    sitename: "Habbine",
    domain: DOMAIN,
    http: HTTP,
    url: URL,
    DB_HOST : "localhost"
  }
}

module.exports = nextConfig;