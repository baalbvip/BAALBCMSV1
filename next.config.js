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
    keySession: "BAALBCMS_78f4sad5da9$we7823234",
    url: URL,
    DB_HOST: "localhost",
    apiLook: "https://habbo.city/habbo-imaging/avatarimage?figure=",
    walletCoins: {
    },
    database: {
      host: "localhost",
      user: "root",
      password: "",
      database: "baalbcms"
    }
  }
}

module.exports = nextConfig;