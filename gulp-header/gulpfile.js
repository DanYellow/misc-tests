const header = require('gulp-header');
const gulp = require('gulp');
const bump = require('gulp-bump');

const argv = require('yargs').argv
const versionType = (!argv.versionType) ? 'minor' : argv.versionType;

const pkg = require('./package.json');
const banner = `
  /**
   * ${pkg.name} - ${pkg.description}
   * @version ${pkg.version}
   * @link ${pkg.homepage}
   * @license ${pkg.license}
   * @createdAt <%= new Date() %>
   */
`;

gulp.task('scripts', () => {
  gulp.src('./src/scripts/*.js')
  .pipe(header(banner, { pkg : pkg }))
  .pipe(bump({ type: versionType }))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('versioning', () => {
  gulp.src(['./package.json'])
  .pipe(bump({ type: versionType }))
  .pipe(gulp.dest('./'))
});

gulp.task('default', ['versioning', 'scripts']);
