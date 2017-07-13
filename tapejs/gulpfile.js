const gulp        = require('gulp')
const cache       = require('gulp-cached')
const tape        = require('gulp-tape')
const tapColorize = require('tap-colorize')
const notify      = require('gulp-notify')
const plumber     = require('gulp-plumber')

const fs          = require('fs')
const path        = require('path')

const spec        = require('tap-spec')

const remember    = require('gulp-remember')

const cacheName   = 'unit_tests'


function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task('watch', () => {
  const watcher = gulp.watch('__tests__/**/*.js', {debounceDelay: 10000});

  watcher.on('change', (event) => {
    let isUnitTestFile = true;
    if (event.type === 'deleted') {
      delete cache.caches[cacheName][event.path];

      return;
    }
 
    const fileNamePath = event.path.split('.')[event.path.split('.').length - 2];
    if (!event.path.includes('.test.js')) {
      if (!fs.existsSync(`${fileNamePath}.test.js`)) {
        return;
      }
      isUnitTestFile = false;
    }

    console.log('---- testing ----')
    const fileToTestPath = (isUnitTestFile) ? event.path : `${fileNamePath}.test.js`;
    const fileName = path.basename(fileToTestPath);

    return gulp.src(fileToTestPath)
      // .pipe(cache(cacheName))
      .pipe(tape({
        reporter: spec()
      })
      .on('success', function(){ console.log('Done!'); })
    );
    
  });

  // .pipe()
}).on('end', function(){ console.log('Done!'); })

gulp.task('tests', function() {
  return gulp.src('__tests__/**/*.testo.js')
    // .pipe(cache(cacheName))
    // .pipe(plumber())
    .pipe(tape())
    .on('error', onError)

});

function onError(err) {
  console.log('err', err);
  this.emit('end');
}

gulp.task('default', ['watch', 'tests'], function() {
  console.log('ended')
});
