const gulp = require('gulp');

var browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

gulp.task('browserSync', function() {
    browserSync.init(null, {
      server: {
        baseDir: './src'
      },
    });
})

gulp.task('sass', function(){
    return gulp.src('./src/scss/style.scss')
      .pipe(sass())    // ici on utisise gulp-sass
      .pipe(gulp.dest('dist/style.css'))
      .pipe(browserSync.stream({stream: true}));
});

gulp.task('watch', function (){
    gulp.watch('./src/scss/style.scss', { events: 'all' }, gulp.series(['sass'])); 
    // Other watchers
  })
