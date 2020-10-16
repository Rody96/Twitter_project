const path = require('path');
const { porHttp } = require('./development');

module.exports = {
    dbUrl: 'mongodb+srv://alex:qwe@cluster0.euvd6.gcp.mongodb.net/twitter?retryWrites=true&w=majority',
    cert: '/etc/letsencrypt/live/www.rodrigue-projects.site/fullchain.pem',
    key: '/etc/letsencrypt/live/www.rodrigue-projects.site/privkey.pem',
    portHttp: 80,
    portHttps: 443
}