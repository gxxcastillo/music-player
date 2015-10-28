let gulp = require('gulp');
let babel = require('gulp-babel');
let eslint = require('gulp-eslint');

gulp.task('build', function () {
	return gulp.src('src/Player.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
	return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['build']);