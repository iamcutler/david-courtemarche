module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'babel:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
