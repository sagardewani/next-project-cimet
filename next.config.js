module.exports = {
  compiler: {
    styledComponents: true
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_EXTERNAL_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
}
