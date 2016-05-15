var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var concat     = require('gulp-concat');
var livereload = require('gulp-livereload');
var compressor = require('node-minify');
var connect  = require('connect');
var compiler = require('connect-compiler');
var liverefresh = require('live-refresh');


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

liverefresh.set('watch.deep', true);
liverefresh.set('watch.interval', 500);
liverefresh.set('watch.persistent', true);
liverefresh.set('watch.extensions', ['js', 'css', 'html']);
liverefresh.set('ignore.files', [/^\./]);
liverefresh.set('ignore.directories', [/node_modules/, /^\.\S/]);


liverefresh.watch('./build/css');


app = require('express')() //express server
server = require('http').createServer(app) //http wrapper server
io = require('socket.io').listen(server) //socket.io in charge
server.listen(1234)

// watch .js and .css files
watch = require('node-watch')
filter = function(pattern, fun){
    return function(filename){
        if(pattern.test(filename){fun(filename);}
    }
}


gulp.task('watch', function(){
    gulp.watch('./assets/css/*.css', ['minify-css']);
    gulp.watch('index.js', ['minify-js']);
});




