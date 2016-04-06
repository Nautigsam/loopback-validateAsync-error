'use strict';

module.exports = function (app, cb) {

    console.log('[Book] create one instance');
    app.models.Book.create({title: 'aBook'})
    .then((bookInstance) => {
        console.log('[Book] instance created with id '+bookInstance.getId());
        console.log('[Page] create one instance');
        return bookInstance.pages.create({content: 'aContent'})
        .then((pageInstance) => {
            console.log('[Page] instance created with id '+pageInstance.getId());
        });
    });

};
