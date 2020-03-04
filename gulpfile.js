const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.html").on('change', browserSync.reload);
};


// Min file
function gRename(done) {
  src('./css/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(dest('./css/'));
    done();
};

function serveSass() {
  return src("./sass/*.sacss")
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
};

exports.serve = bs;