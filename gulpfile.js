var gulp = require('gulp');
var jshint = require('gulp-jshint');
var  jsFiles = ['*.js', 'src/**/*.js']; 

gulp.task('style', function() //create a gulp task called "style", which will execute when you call gulp style
{
    gulp.src(jsFiles)  //bring in all js files from this dir and src (ie not from node_modules) that we want to lint
    .pipe(jshint()) //pipe it into js hint, which will execute
    .pipe(jshint.reporter('jshint-stylish', { //which we must then pipe into a reporter)
        verbose:true
    }));
});
