//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import del from 'del';
import babelRegister from 'babel-core/register';


//-------------------------------------------------------------------------------
// Gulp Properties
//-------------------------------------------------------------------------------

const sources = {
  babel: [
    'src/**',
    '!**/tests/**'
  ]
};


//-------------------------------------------------------------------------------
// Gulp Tasks
//-------------------------------------------------------------------------------

gulp.task('default', ['prod']);

gulp.task('prod', ['babel']);

gulp.task('dev', ['babel', 'lint', 'babel-watch', 'lint-watch']);

gulp.task('test', ['lint', 'mocha']);

gulp.task('babel', function() {
  return gulp.src(sources.babel)
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(babel({
      presets: ['es2015', 'stage-1', 'stage-2']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .on('error', (error) => {
      util.log(error);
    });
});

gulp.task('lint', () => {
  return gulp.src([
    '**/*.js',
    '!node_modules/**',
    '!dist/**'
  ])
  .pipe(eslint())
  .pipe(eslint.formatEach())
  .pipe(eslint.failOnError())
  .on('error', function (error) {
    util.log('Stream Exiting With Error', error);
  });
});

gulp.task('mocha', () => {
  return gulp.src([
    '**/__tests__/*.js',
    '!node_modules/**',
    '!dist/**'
  ])
  .pipe(mocha({
    compilers: {
      js: babelRegister
    }
  }));
});

gulp.task('clean', () => {
  return del([
    'dist'
  ]);
});


//-------------------------------------------------------------------------------
// Gulp Watchers
//-------------------------------------------------------------------------------

gulp.task('babel-watch', function() {
  gulp.watch(sources.babel, ['babel']);
});

gulp.task('lint-watch', function() {
  const lintAndPrint = eslint();
  lintAndPrint.pipe(eslint.formatEach());

  return gulp.watch('src/**/*.js', function (event) {
    if (event.type !== 'deleted') {
      gulp.src(event.path)
        .pipe(lintAndPrint, {end: false})
        .on('error', function (error) {
          util.log(error);
        });
    }
  });
});
