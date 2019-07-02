const { src, dest } = require('gulp');
const replace = require('gulp-replace');

function repalceEnvs(cb) {
  return src('./app.yaml')
    .pipe(replace('_SERVICE', process.env._SERVICE || 'default'))
    .pipe(dest('./'));
}

exports.default = repalceEnvs;