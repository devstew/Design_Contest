var gulp = require('gulp');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');
var iconfontCss = require('gulp-iconfont-css');
var iconfont = require('gulp-iconfont');

var fontName = 'icons-fonts';

gulp.task('Iconfont', function(){
    return gulp.src(['images/svg/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'scss/_template.scss',
            targetPath: '../scss/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            startUnicode: false,
            prependUnicode: false,
            fontHeight: 1001,
            normalize: true,
            formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'], // default, 'woff2' and 'svg' are available
        }))
        .pipe(gulp.dest('fonts'))
});

gulp.task('scss', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'})
        .on('error', sass.logError))
        .pipe(gulp.dest('css'));
});


gulp.task('sass-watch', function () {
	gulp.watch('scss/**/*.scss', ['scss'])
});
 
gulp.task('tinypng', function () {
    gulp.src('images/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'Fp23WFVwjJbBvpZS9M1631H50jpK8QDx',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('images/'));
});
