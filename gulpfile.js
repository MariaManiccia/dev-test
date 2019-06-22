const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    // find scss file
    return gulp.src('./scss/**/*.scss')
    // log any errors
    .pipe(sass().on('error', sass.logError))
    // pass file through compiler
    .pipe(sass())
    // where to save the complied css
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
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;