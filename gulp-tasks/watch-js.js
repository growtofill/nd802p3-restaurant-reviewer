import { src, dest } from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.config';

const webpackWatchConfig = Object.assign({}, { watch: true }, webpackConfig);

export default done =>
    src('src/index.js')
        .pipe(webpack(webpackWatchConfig))
        .on('error', done)
        .pipe(dest('dist'));
