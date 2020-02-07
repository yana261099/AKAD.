var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');
// var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

// var config = {
//     paths: {
//         less: 'app/less/**/*.less',
//         html: 'app/index.html'
//     },
//     output: {
//         cssName: 'app/css/**/*.css',
//         path: 'app'
//     }
// };

gulp.task('less', function() {
    return gulp.src('app/less/**/*.less')
        // .pipe(sourcemaps.init())
        .pipe(less())
        // .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        // .pipe(cleanCss())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        // .pipe(browserSync.stream());
});

// gulp.task('serve', function() {
//     browserSync.init({
//         server: {
//             baseDir: config.output.path
//         }
//     });
   
// });

gulp.task('watch', function() {
    // gulp.watch('app/less/*.less', ['less'])
        gulp.watch('app/homepage.html').on('change', browserSync.reload);
});
 

// gulp.task('default', ['less', 'serve']);