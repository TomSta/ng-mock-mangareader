module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src: ['src/**/*.html', 'src/**/*.js'],

      },
      options: {
        server: {
          baseDir: './src'
        }
      }
    }
  });

  grunt.registerTask('default', ['browserSync']);
};
