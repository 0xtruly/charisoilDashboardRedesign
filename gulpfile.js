const gulp = require("gulp");
const concat   = require("gulp-concat");
// const uglify = require("gulp-uglify-es");
const  babel = require('gulp-babel');
const browserSync = require("browser-sync").create();


gulp.task('js', () => {
    gulp.src('gulp/*.js')
        .pipe(concat('index.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(babel())
        .pipe(browserSync.stream())
});

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir: './' } });
    gulp.watch('gulp/*.js', ['js']);
    gulp.watch('*.html').on('change', browserSync.reload)
});

gulp.task('build', ['js']);

gulp.task('default', ['serve'])