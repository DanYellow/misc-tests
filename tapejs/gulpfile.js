const cache = require('gulp-cached')
const gulp = require('gulp')
const tape = require('gulp-tape')
const tapColorize = require('tap-colorize')
const notify = require("gulp-notify")
const plumber = require('gulp-plumber')

const changed = require('gulp-changed')

var spec = require('tap-spec');

const remember = require('gulp-remember');

const cacheName = 'unit_tests'


gulp.task('watch', function(){
  const watcher = gulp.watch('__tests__/**/*.js', ['tests']);

  watcher.on('change', function (event) {
    console.log('event.type ', event );
    if (event.type === 'deleted') { // if a file is deleted, forget about it 
      delete cache.caches[cacheName][event.path];
      remember.forget(cacheName, event.path);
    }
  });
});

gulp.task('tests', function() {
  return gulp.src('__tests__/**/*.test.js')
    .pipe(cache(cacheName))
    .pipe(plumber())
    .pipe(remember(cacheName))
    .pipe(tape({
      reporter: spec()
    }))
});



gulp.task('default', ['watch', 'tests']);