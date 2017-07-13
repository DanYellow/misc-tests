const cache = require('gulp-cached')
const gulp = require('gulp')
const tape = require('gulp-tape')
const tapColorize = require('tap-colorize')
const notify = require("gulp-notify")
const plumber = require('gulp-plumber')

const fs = require('fs');
const path = require('path');

const changed = require('gulp-changed')

var spec = require('tap-spec');

const remember = require('gulp-remember');

const cacheName = 'unit_tests'


gulp.task('watch', function(){
  const watcher = gulp.watch('__tests__/**/*.js');

  watcher.on('change', function (event) {
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

    const fileToTestPath = (isUnitTestFile) ? event.path : `${fileNamePath}.test.js`;
    const fileName = path.basename(fileToTestPath);
    
    // if (cache.caches[cacheName][fileToTestPath]) {
    //   console.log(fileName, 'already tested');

    //   return;
    // }

    gulp.src(fileToTestPath)
    // .pipe(cache(cacheName))
    // .pipe(remember(cacheName))
    // .pipe(plumber())
    .pipe(tape({
      reporter: spec()
    }).on('error', function() { alert('zffze')})
    );
   

  });
});

function onWarning(error) { 
  console.log('r', error);
}

gulp.task('tests', function() {
  return gulp.src('__tests__/**/*.test.js')
    .pipe(cache(cacheName))
    // .pipe(remember(cacheName))
    .pipe(plumber())
    .pipe(tape({
      reporter: spec()
    }))
});



gulp.task('default', ['watch', 'tests']);