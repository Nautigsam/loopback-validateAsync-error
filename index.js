'use strict';

var app = module.exports = require('./server/server');

if (require.main === module) {
    app.boot()
    .then(() => {
        app.listen(() => {
            app.emit('started');
            let baseUrl = app.get('url').replace(/\/$/, '');
            console.log('Web server listening at: %s', baseUrl);
            if (app.get('loopback-component-explorer')) {
                let explorerPath = app.get('loopback-component-explorer').mountPath;
                console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
            }
        });
    });
}