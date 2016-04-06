var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();

app.boot = (options) => {
    options = Object.assign({
        appRootDir: __dirname
    }, options);
    return new Promise((resolve, reject) => {
        boot(app, options, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

