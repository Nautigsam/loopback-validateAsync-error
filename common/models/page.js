'use strict';

module.exports = function (Page) {

    Page.validateAsync('content', function (err, done) {
        if (this.content.length > 1) {
            err();
        }
        done();
    }, {message: 'too long, didn\'t read'});

};