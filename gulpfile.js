'use strict';

const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('server', () => {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: '.index.html'
    }));
});
