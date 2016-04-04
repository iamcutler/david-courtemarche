module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
		'babel:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
