const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    return gulp.src('./scss/**/*.scss')
    // log any errors
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    // browser sync
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
        baseDir: './'
        }
    });

    // which files to watch
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;