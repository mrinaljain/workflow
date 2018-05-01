var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var coffeeSources = ['components/coffee/tageline.coffee']

gulp.task('coffee', function () {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare : true })
			.on('error',gutil.log))
		.pipe(gulp.dest('components/scripts'))
})