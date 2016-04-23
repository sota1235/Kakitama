const gulp  = require('gulp');
const babel = require('gulp-babel');

gulp.task('export-html', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('app'));
});

gulp.task('es6', () => {
  return gulp
    .src('src/**/*.js')
     .pipe(
      babel({
        presets: ['es2015', 'react'],
        plugins: [
          'transform-react-display-name'
        ],
      })
    )
    .pipe(gulp.dest('app'))
});

gulp.task('build', ['es6', 'export-html']);
