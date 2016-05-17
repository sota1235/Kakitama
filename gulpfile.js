"use strict";

const gulp        = require('gulp');
const babel       = require('gulp-babel');
const stylus      = require('gulp-stylus');
const del         = require('del');
const runSequence = require('run-sequence');

// clean build files
gulp.task('clean', () => {
  del('./app');
});

// export node_modules files
gulp.task('export-node-modules', () => {
  const exportModules = [
    'font-awesome',
    'material-design-icons',
  ];

  for(let exportModule of exportModules) {
    gulp.src(`node_modules/${exportModule}/**/*`)
      .pipe(gulp.dest(`app/node_modules/${exportModule}`));
  }
});

// export html files
gulp.task('export-html', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('app'));
});

// compile stylus
gulp.task('stylus', () => {
  return gulp.src('src/css/*')
    .pipe(stylus())
    .pipe(gulp.dest('app/css/'));
});

// compile js written in ES2015
gulp.task('es6', () => {
  return gulp
    .src('src/**/*.js')
     .pipe(
      babel({
        presets: ['es2015', 'react', 'stage-3', 'stage-0'],
        plugins: [
          'transform-react-display-name',
          'transform-object-assign'
        ],
      })
    )
    .pipe(gulp.dest('app'))
});

// default build task
gulp.task('build', (cb) => {
  return runSequence('clean', 'es6', 'stylus', 'export-html', 'export-node-modules', cb);
});
