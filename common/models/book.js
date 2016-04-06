'use strict';

module.exports = function (Book) {

    Book.observe('before save', function (ctx, next) {
        console.log('[Book] "before save" operation hook triggered');
        next();
    });

};