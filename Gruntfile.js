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
    },
    concat: {
      options: {
        separator: ';\n',
      },
      dist: {
        src: [
          'src/bower_components/angular/angular.min.js',
          'src/bower_components/angular-route/angular-route.min.js',
          'src/bower_components/angular-resource/angular-resource.min.js',
          'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'src/bower_components/angular-animate/angular-animate.min.js',
          'src/bower_components/jquery/dist/jquery.min.js',
          'src/bower_components/bootstrap/dist/js/bootstrap.min.js',
          'src/bower_components/wow/dist/wow.min.js'
        ],
        dest: 'src/built.js',
      },
    },
  });

  grunt.registerTask('default', ['browserSync']);
};
