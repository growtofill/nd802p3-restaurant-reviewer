import { src, dest } from 'gulp';
import concatCss from 'gulp-concat-css';
import cleanCss from 'gulp-clean-css';

export default () =>
    src('src/styles/index.css')
        .pipe(concatCss('app.bundle.css', { rebaseUrls: false }))
        .pipe(cleanCss({ rebase: false }))
        .pipe(dest('dist'));
