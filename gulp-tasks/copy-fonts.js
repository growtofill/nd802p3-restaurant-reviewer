import { src, dest } from 'gulp';

export default () =>
    src('node_modules/bootstrap/fonts/*')
        .pipe(dest('dist/fonts'));
