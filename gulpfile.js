var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

gulp.task('default', function(){
    console.log("Dit is mijn test voor GULP");
});

gulp.task('minify-css', function () {
    return gulp.src('assets/css/*.css')
        .pipe(concatCss("css/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/css/*.css', ['minify-css']);
})