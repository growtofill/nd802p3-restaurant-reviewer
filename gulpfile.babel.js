import gulp from 'gulp';

import compileCss from './gulp-tasks/compile-css';
import compileJs from './gulp-tasks/compile-js';
import copyHtml from './gulp-tasks/copy-html';
import webpackWatch from './gulp-tasks/watch-js';

gulp.task('compile-css', compileCss);
gulp.task('compile-js', compileJs);
gulp.task('copy-html', copyHtml);
gulp.task('webpack-watch', webpackWatch);

gulp.task('gulp-watch', () => {
    gulp.watch('src/**/*.css', ['compile-css']);
    gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('watch', ['gulp-watch', 'webpack-watch']);
gulp.task('build', ['compile-css', 'compile-js', 'copy-html']);
gulp.task('default', ['build']);
