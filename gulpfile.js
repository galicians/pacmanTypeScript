var gulp = require('gulp');
var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');
var typescript = require('gulp-tsc');
var runSequence = require('run-sequence');
 
gulp.task('compile', function(){
  return gulp.src(['src/ts/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('src/js/'));
});

gulp.task('test', function() {
   return gulp.src('spec/*.js')
      .pipe(jasmine({verbose: true}));
});

gulp.task('default', function() {
   runSequence( 'compile', 'test' );
});

gulp.task('watch', function() {
	gulp.watch(['src/ts/**/*.ts','spec/**/*.js'], ['default'])
		
})