var loopback = require('loopback');
var boot = require('loopback-boot');
var app = loopback();

app.start = () => {
    return app.listen(() => {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

boot(app, __dirname, (err) => {
    if (err) throw err;
    app.start();
});