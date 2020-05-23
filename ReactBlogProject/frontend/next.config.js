
const withCss = require('@zeit/next-css');

module.exports = withCss({
    publicRuntimeConfig : {
        APP_NAME: 'Garrys Blog',
        API_DEVELOPMENT: 'http://localhost:3003/api',
        PRODUCTION : false      
    }
});