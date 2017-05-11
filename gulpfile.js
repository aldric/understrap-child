// Defining base pathes
var basePaths = {
    bower: './bower_components/',
    node: './node_modules/',
    dev: './src/'
};

// browser-sync watched files
// automatically reloads the page when files changed
var browserSyncWatchFiles = [
    './css/*.min.css',
    './js/*.min.js',
    './*.php'
];
// browser-sync options
// see: https://www.browsersync.io/docs/options/
var browserSyncOptions = {
    proxy: "localhost:8080/topbanque/",
    notify: false
};

// Defining requirements
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var merge2 = require('merge2');
var ignore = require('gulp-ignore');
var rimraf = require('gulp-rimraf');
var clone = require('gulp-clone');
var merge = require('gulp-merge');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var del = require('del');

function swallowError(self, error) {
    console.log(error.toString())

    self.emit('end')
}

// Run:
// gulp sass + cssnano + rename
// Prepare the min.css for production (with 2 pipes to be sure that "child-theme.css" == "child-theme.min.css")
gulp.task('scss-for-prod', function() {
    var source = gulp.src('./sass/*.scss')
        .pipe(plumber({
            errorHandler: function(error) {
                swallowError(this, error);
            }
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass());

    var pipe1 = source.pipe(clone())
        .pipe(sourcemaps.write(undefined, {
            sourceRoot: null
        }))
        .pipe(gulp.dest('./css'))
        .pipe(rename('custom-editor-style.css'))
        .pipe(gulp.dest('./css'));

    var pipe2 = source.pipe(clone())
        .pipe(plumber({
            errorHandler: function(error) {
                swallowError(this, error);
            }
        }))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));

    return merge(pipe1, pipe2);
});


// Run:
// gulp sourcemaps + sass + reload(browserSync)
// Prepare the child-theme.css for the development environment
gulp.task('scss-for-dev', function() {
    gulp.src('./sass/*.scss')
        .pipe(plumber({
            errorHandler: function(error) {
                swallowError(this, error);
            }
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass())
        .pipe(sourcemaps.write(undefined, {
            sourceRoot: null
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch-scss', ['browser-sync'], function() {
    gulp.watch('./sass/**/*.scss', ['scss-for-dev']);
});

// Run:
// gulp sass
// Compiles SCSS files in CSS
gulp.task('sass', function() {
    var stream = gulp.src('./sass/*.scss')
        .pipe(plumber({
            errorHandler: function(error) {
                swallowError(this, error);
            }
        }))
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(rename('custom-editor-style.css'))
        .pipe(gulp.dest('./css'));
    return stream;
});

// Run:
// gulp watch
// Starts watcher. Watcher runs gulp sass task on changes
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/child-theme.css', ['cssnano']);
    gulp.watch([basePaths.dev + 'js/**/*.js'], ['scripts'])
});

// Run:
// gulp nanocss
// Minifies CSS files
gulp.task('cssnano', ['cleancss'], function() {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function(error) {
                swallowError(self, error);
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('cleancss', function() {
    return gulp.src('./css/*.min.css', {
            read: false
        }) // much faster
        .pipe(ignore('theme.css'))
        .pipe(rimraf());
});

// Run:
// gulp browser-sync
// Starts browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});

// Run:
// gulp watch-bs
// Starts watcher with browser-sync. Browser-sync reloads page automatically on your browser
gulp.task('watch-bs', ['browser-sync', 'watch', 'cssnano'], function() {});

// Run:
// gulp scripts.
// Uglifies and concat all JS files into one
gulp.task('scripts', function() {
    var scripts = [
        basePaths.dev + 'js/skip-link-focus-fix.js',

        basePaths.dev + 'js/materialize/initial.js',
        basePaths.dev + 'js/materialize/jquery.easing.1.3.js',
        basePaths.dev + 'js/materialize/animation.js',
        basePaths.dev + 'js/materialize/velocity.min.js',
        basePaths.dev + 'js/materialize/hammer.min.js',
        basePaths.dev + 'js/materialize/jquery.hammer.js',
        basePaths.dev + 'js/materialize/global.js',
        basePaths.dev + 'js/materialize/collapsible.js',
        basePaths.dev + 'js/materialize/dropdown.js',
        basePaths.dev + 'js/materialize/modal.js',
        basePaths.dev + 'js/materialize/materialbox.js',
        basePaths.dev + 'js/materialize/parallax.js',
        basePaths.dev + 'js/materialize/tabs.js',
        basePaths.dev + 'js/materialize/tooltip.js',
        basePaths.dev + 'js/materialize/waves.js',
        basePaths.dev + 'js/materialize/toasts.js',
        basePaths.dev + 'js/materialize/sideNav.js',
        basePaths.dev + 'js/materialize/scrollspy.js',
        basePaths.dev + 'js/materialize/forms.js',
        basePaths.dev + 'js/materialize/slider.js',
        basePaths.dev + 'js/materialize/cards.js',
        basePaths.dev + 'js/materialize/chips.js',
        basePaths.dev + 'js/materialize/pushpin.js',
        basePaths.dev + 'js/materialize/buttons.js',
        basePaths.dev + 'js/materialize/transitions.js',
        basePaths.dev + 'js/materialize/scrollFire.js',
        basePaths.dev + 'js/materialize/date_picker/picker.js',
        basePaths.dev + 'js/materialize/date_picker/picker.date.js',
        basePaths.dev + 'js/materialize/character_counter.js',
        basePaths.dev + 'js/materialize/carousel.js',
        basePaths.dev + 'js/materialize/tapTarget.js',
        // Custom script
        basePaths.dev + 'js/vue/vue.js',
        basePaths.dev + 'js/custom/main.js'
    ];

    gulp.src(scripts)
        .pipe(concat('child-theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));

    gulp.src(scripts)
        .pipe(concat('child-theme.js'))
        .pipe(gulp.dest('./js/'));
});

// Deleting any file inside the /src folder
gulp.task('clean-source', function() {
    return del([basePaths.dev + 'css/**',
        basePaths.dev + 'src/js/vue/*',
        basePaths.dev + 'src/js/materialize/*',
        basePaths.dev + 'src/js/jquery/*',
        basePaths.dev + 'src/sass/materialize/*',
        basePaths.dev + 'src/*.js'
    ]);
});

// Run:
// gulp copy-assets.
// Copy all needed dependency assets files from bower_component assets to themes /js, /scss and /fonts folder. Run this task after bower install or bower update


// Copy all Bootstrap JS files
gulp.task('copy-assets', function() {
    // Copy jQuery
    gulp.src(basePaths.node + 'jquery/dist/*.js')
        .pipe(gulp.dest(basePaths.dev + '/js'));

    gulp.src(basePaths.node + 'materialize-css/sass/**/*.scss')
        .pipe(gulp.dest(basePaths.dev + '/sass/materialize'));

    gulp.src(basePaths.node + 'materialize-css/js/**/*.js')
        .pipe(gulp.dest(basePaths.dev + '/js/materialize'));

    gulp.src(basePaths.node + 'vue/dist/vue.js')
        .pipe(gulp.dest(basePaths.dev + '/js/vue'));

    // Copy all Roboto Fonts
    gulp.src(basePaths.node + 'roboto-fontface/fonts/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('./fonts'));

    // Copy all FA Fonts
//    gulp.src(basePaths.node + 'roboto-fontface/fonts/**/*.{ttf,woff,woff2,eof,svg}')
  //      .pipe(gulp.dest('./fonts'));
});

// Run
// gulp dist
// Copies the files to the /dist folder for distributon
gulp.task('dist', ['clean-dist'], function() {
    gulp.src(['**/*', '!bower_components', '!bower_components/**', '!node_modules', '!node_modules/**', '!src', '!src/**', '!dist', '!dist/**', '!sass', '!sass/**', '!readme.txt', '!readme.md', '!package.json', '!gulpfile.js', '!CHANGELOG.md', '!.travis.yml', '!jshintignore', '!codesniffer.ruleset.xml', '*'])
        .pipe(gulp.dest('dist/'))
});

// Deleting any file inside the /src folder
gulp.task('clean-dist', function() {
    return del(['dist/**/*', ]);
});

// Run
// gulp dist-product
// Copies the files to the /dist folder for distributon
gulp.task('dist-product', ['clean-dist-product'], function() {
    gulp.src(['**/*', '!bower_components', '!bower_components/**', '!node_modules', '!node_modules/**', '!src', '!src/**', '!dist', '!dist/**', '*'])
        .pipe(gulp.dest('dist-product/'))
});

// Deleting any file inside the /src folder
gulp.task('clean-dist-product', function() {
    return del(['dist-product/**/*', ]);
});
