const gulp         = require ('gulp'),
      sass         = require ('gulp-sass'),
      browserSync  = require ('browser-sync'), //ПОДКЛЮЧАЮ ЭТУ ХУЕРГУ
      autoprefixer = require('gulp-autoprefixer');

//ДАЛЕЕ СОЗДАЮ ТАСК ДЛЯ КОМПИЛЯЦИИ САСС ФАЙЛА В СИЭСЭС




gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync.init({ // Выполняем browserSync
		proxy: "health",
		notify: false
		//server: { // Определяем параметры сервера
			//baseDir: 'app' // Директория для сервера - app
		//} ,
	});
});

//gulp.task('code', function() {
//	return gulp.src('app/*.html')
//	.pipe(browserSync.reload({ stream: true }))
//});

//gulp.task('code2', function() {
//	return gulp.src('app/**/*.php')
//	.pipe(browserSync.reload({ stream: true }))
//});



gulp.task('watch', function() {
	gulp.watch('app/*.html').on("change", browserSync.reload);
	gulp.watch('app/**/*.php').on('change', browserSync.reload);
//	gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
//	gulp.watch('app/**/*.php', gulp.parallel('code2')); // Наблюдение за php файлами в корне проекта

});
gulp.task('default', gulp.parallel( 'browser-sync', 'watch'));
