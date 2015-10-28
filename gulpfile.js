'use strict';

let gulp = require('gulp');
let eslint = require('gulp-eslint');

gulp.task('lint', function () {
	return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});