'use strict';

module.exports = function (app, cb) {

    console.log('[Book] create one instance');
    app.models.Book.create({title: 'aBook'})
    .then((bookInstance) => {
        console.log('[Book] instance created with id '+bookInstance.getId());
        let pagesToInsert = [{content: 'a'}, {content: 'b'}];
        return Promise.all(pagesToInsert.map((page, pageIndex) => {
            return Promise.resolve()
            .then(() => console.log('[Page] create one instance'))
            .then(() => bookInstance.pages.create(page))
            .then((pageInstance) => {
                console.log('[Page] instance created with id '+pageInstance.getId());
            })
            .catch((err) => {
                err.message = `On page ${pageIndex}: ${err.message}`;
                console.error(err);
            });
        }));
    });

};
