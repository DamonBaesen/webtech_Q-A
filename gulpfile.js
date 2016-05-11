var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var concat     = require('gulp-concat');
var autoReload = require('gulp-auto-reload');

gulp.task('default', function(){
    console.log("Dit is mijn test voor GULP");
});

gulp.task('minify-css', function () {
    return gulp.src('assets/*.css')
        .pipe(concatCss("css/styles.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public'));
});





///////////////////////////////////////////////////////////////////////////////////

// some paths to build from
var paths = {
    css: "public/css/*.css",
    js: "src/**/*.js"
};

// the output
var outapp = "dist";

// this transformer is used to inject <script>
// tags into the html when reloader is enabled
var htmlInject = function() {
    return gutil.noop();
};

gulp.task('js', function() {
    gulp.src(paths.html)
        .pipe(htmlInject())      // inject <script>
        .pipe(gulp.dest(outapp));
});

gulp.task('css', function() {
    gulp.src(paths.css)
        .pipe(concat('ui/app.css'))
        .pipe(gulp.dest(outapp));
});

gulp.task('reloader', function() {
    // start a server for reloading
    var reloader = autoReload();
    // copy the auto-reload.js script to
    // the output
    reloader.script()
        .pipe(gulp.dest(outapp));
    // inject the script into html pages
    htmlInject = reloader.inject;
    // start watching the output for changes
    gulp.watch(outapp + "/**/*", reloader.onChange);
});

// building html/css causes no <script> injection
gulp.task('default', ['html', 'css']);

// 'reloader' sets htmlInject, and 'html' task will
// make injected html page
gulp.task('watch', ['reloader', 'js'], function() {
    // watch all source for rebuild
    gulp.watch('./src/**/*', ['default']);
});

///////////////////////////////////////////////////////////////////////////////////




gulp.task('watch', function(){
    gulp.watch('./assets/*.css', ['minify-css']);
})