const gulp = require('gulp');
// const ts = require('gulp-typescript');

// // pull in the project TypeScript config
// const tsProject = ts.createProject('tsconfig.json');
// //task to be run when the watcher detects changes
// gulp.task('scripts', () => {
//   const tsResult = tsProject.src()
//   .pipe(tsProject());
//   return tsResult.js.pipe(gulp.dest(''));
// });
// //set up a watcher to watch over changes

// gulp.task('watch', ['scripts'], () => {
//   	gulp.watch('**/*.ts', ['scripts']);	
// });

// gulp.task('default', ['watch']);



var exec = require('child_process').exec;

gulp.task('build', function (callback) {
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
        console.log("---Build Finished----");

        console.log("---Server start----");
        gulp.run('start');
    });
});

gulp.task('start', function (callback) {
  exec('npm start', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
  });
});


gulp.task('default', ['build','start'],function() {
  console.log("Started");
})