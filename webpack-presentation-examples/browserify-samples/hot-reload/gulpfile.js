const watchify = require('watchify');
const babelify = require('babelify');
const livereactload = require('livereactload');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');

const opts = {
    entries: ['./src/main.js'],
    debug: true,
    cache: {},
    packageCache: {},
    transform: [babelify],
    plugin: [watchify, livereactload]
  };
const bro = browserify(opts); 

bro.on('update', bundle);
bro.on('time', function (time) {
    console.log(`Time to build: ${time}ms`)
})

gulp.task('js', bundle);

function bundle() {
    return bro.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
  }


