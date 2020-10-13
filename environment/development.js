const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://alex:qwe@cluster0.euvd6.gcp.mongodb.net/twitter?retryWrites=true',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}