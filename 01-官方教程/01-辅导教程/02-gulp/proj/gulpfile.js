var gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var watchify = require("watchify");
var gutil = require("gulp-util");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var paths = {
    pages: ['src/*.html']
}

// gulp.task("default",function(){
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// })

var watchedBrowserify = watchify(browserify({
    basedir:'.',
    debug: true,
    entries:['src/main.ts'],
    cache:{},
    packageCache:{}
}).plugin(tsify));

gulp.task("copy-html",function(){
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
})

function bundle(){
    return watchedBrowserify
    .transform('babelify',{
        presets:['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(sourcemaps.write('./'))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
}

gulp.task("default",gulp.series('copy-html',bundle))

watchedBrowserify.on("update",bundle);
watchedBrowserify.on("log", gutil.log)