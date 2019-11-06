require('dotenv').config()
module.exports = {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
    API_TOKEN: process.env.REACT_APP_API_TOKEN,
    TOKEN_KEY: 'recipebox-client-auth-token',
    JWT_EXPIRY: process.env.JWY_EXPIRY || '20s',
}