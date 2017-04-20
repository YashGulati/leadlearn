var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

// default
gulp.task('default', ['browser-sync', 'webpack-watch']);

// webpack spawn
var spawn = require('child_process').spawn;
gulp.task('webpack-watch', (cb) => {
  const webpack_watch = spawn('webpack.cmd', ['--watch', '--color']);

  webpack_watch.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  webpack_watch.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  webpack_watch.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

// nodemon
gulp.task('nodemon', () => {
  nodemon({
    script: 'index.js'
  }).on('start', function onStart() {
      // ensure start only got called once
      console.log('-> start called');
      // if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      console.log('-> restart called');
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 100);
    });
})

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:80",  // local node app address
    port: 5000,  // use *different* port than above
    notify: false, ui: false
  });
});
