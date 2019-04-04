var gulp          = require('gulp');

module.exports = function (name,files,tasks) {
    return gulp.task(name , function(){
        gulp.watch(files,tasks);
    });
};