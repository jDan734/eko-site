const gulp         = require("gulp"),
      sass         = require("gulp-sass"),
      cssnano      = require("gulp-cssnano"),
      jade         = require("gulp-jade"),
      watch        = require("gulp-watch"),
      autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", () => 
    gulp.src("./sass/**/*.sass")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest("./css"))
)


gulp.task("jade", () =>
    gulp.src("./jade/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("./"))
)

gulp.task("jade-file", () =>
    gulp.src("./jade/&{process.argv[4]}.jade")
        .pipe(jade())
        .pipe(gulp.dest("./"))
)

gulp.task("default", () => 
    gulp.src("./sass/**/*.sass")
        .pipe(watch("./sass/**/*.sass"))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest("./css"))
)



