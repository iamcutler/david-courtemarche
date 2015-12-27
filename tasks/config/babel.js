/**
 * Compile ES6 to ES5
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to compile future javascript back to
 * browser compatiable code
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-babel
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.js', '!dependencies/**/*.js'],
        dest: '.tmp/public/js/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};
