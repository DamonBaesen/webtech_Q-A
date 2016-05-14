var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var concat     = require('gulp-concat');
var livereload = require('gulp-livereload');
var compressor = require('node-minify');
var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');

gulp.task('default', function(){
    return gulp.src('assets/css/*.css')
        .pipe(concatCss("css/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', function () {
    return gulp.src('assets/css/*.css')
        .pipe(concatCss("css/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'))
});

gulp.task('minify-js', function () {
    new compressor.minify({
        type: 'uglifyjs',
        fileIn: 'index.js',
        fileOut: 'minifyjs.js',
        callback: function(err){
            console.log(err);
        }
    });
});


gulp.task('watch', function(){
    gulp.watch('./assets/css/*.css', ['minify-css']);
    gulp.watch('index.js', ['minify-js']);
});




