const cache = require('gulp-cached')
const gulp = require('gulp')
const tape = require('gulp-tape')
const tapColorize = require('tap-colorize')
const notify = require("gulp-notify")
const plumber = require('gulp-plumber')
const faucet = require('faucet')
const remember = require('gulp-remember')

const exec = require('child_process').exec

const cacheName = 'unit_tests'


gulp.task('watch', function(){
  const watcher = gulp.watch('__tests__/**/*.js', ['tests']);

  watcher.on('change', function(file) {
    exec(`npm run test -- ${file.path}`, function (err, stdout, stderr) {
      if (err) {
        delete cache.caches[cacheName][file.path];
        remember.forget(cacheName, file.path);
      }
    });
  })
});

gulp.task('tests', function() {
  return gulp.src('__tests__/**/*.test.js')
    .pipe(cache(cacheName))
    .pipe(plumber( {errorHandler: notify("Hello error!")} ))
    .pipe(remember(cacheName))
    .pipe(tape({
      reporter: tapColorize()
    }))
});



gulp.task('default', ['watch', 'tests']);