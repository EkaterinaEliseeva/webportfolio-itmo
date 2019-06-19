var gulp = require("gulp");
var server = require("browser-sync").create();

gulp.task("start", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/*.html", gulp.series("refresh"));
  gulp.watch("source/*.js", gulp.series("refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});
