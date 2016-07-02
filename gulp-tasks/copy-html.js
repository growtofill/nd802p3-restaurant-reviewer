import { src, dest } from 'gulp';

export default () =>
    src('src/*.html')
        .pipe(dest('dist'));
