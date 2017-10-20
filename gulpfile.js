var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var paths = {
    less: [
        "assets/less/bootstrap-3.3.7/less/bootstrap.less",
        "assets/less/style.less"
    ]
}
gulp.task('less', function () {
    return gulp.src(paths.less)
    .pipe(plumber())
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('./assets/css'));
});