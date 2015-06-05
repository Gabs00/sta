var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


var nodemonConfig = require('./nodemon');
var serverFiles = 'server/**/*.*';
var clientFiles = 'client/!lib/**/*.*';

gulp.task('watch', function(){
  var watcher = watch(files(serverFiles, clientFiles));
  watcher.on('error', function(err, s){
    console.log(err,s);
  })
});

gulp.task('start', function(){
  return start(nodemonConfig);
});

function files(){
  var args = Array.prototype.slice.call(arguments);

  console.log(args);
  return args;
}

function watch(files){
  return gulp.watch(files);
}

function start(config){
  return nodemon(config);
}
