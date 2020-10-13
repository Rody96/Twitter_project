const app = require('../app');
const session = require('express-session');
const Mongostore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(session({
    secret: 'je suis un secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 14 // 2 semaines
    },
    store: new Mongostore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24 * 14 // 2 semaines
    })
}));