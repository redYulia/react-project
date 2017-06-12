'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
//const babel = require('gulp-babel');
//const debug = require('gulp-debug');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const path = require('path');
const webpack = require('webpack');
const gulpSequence = require('gulp-sequence');
//const react = require('gulp-react');
const util = require('gulp-util');
//const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require('./webpack.config.js');

gulp.task('styles', function() {
    return gulp.src('./frontend/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(scss(
            {"bundleExec": true}
        ))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
});

gulp.task('clean', function() {
    return del('public', 'tmp');
});

gulp.task('clean-tmp', function() {
    return del('tmp');
});

gulp.task("webpack", function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) 
            throw new util.PluginError("webpack", err);
        util.log("[webpack]", stats.toString({
            
        }));
        callback();
    });
});

gulp.task('js', function() {
    return gulp.src(['./tmp/js/*.js'])
        //.pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', gulpSequence('clean', ['styles', 'webpack'], 'js', 'clean-tmp'));












