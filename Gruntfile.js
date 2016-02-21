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
    ngAnnotate: {
       framewrok: {
           files: {
             'src/annotated/mangascraper/service.js': ['src/mangascraper/service.js'],
             'src/annotated/manga-core/service.js': ['src/manga-core/service.js'],
             'src/annotated/manga-app/app.js': ['src/manga-app/app.js'],
             'src/annotated/manga-app/search.controller.js': ['src/manga-app/search.controller.js'],
             'src/annotated/manga-app/results.controller.js': ['src/manga-app/results.controller.js'],
             'src/annotated/manga-app/home.controller.js': [' src/manga-app/home.controller.js'],
             'src/annotated/manga-app/manga-result.directive.js': [' src/manga-app/manga-result.directive.js'],
             'src/annotated/manga-app/chapter.controller.js': ['src/manga-app/chapter.controller.js']
           },
       },
    },
    uglify: {
      framework: {
        files: {
          'src/annotated/mangascraper/service.min.js': ['src/annotated/mangascraper/service.js'],
          'src/annotated/manga-core/service.min.js': ['src/annotated/manga-core/service.js'],
          'src/annotated/manga-app/app.min.js': ['src/annotated/manga-app/app.js'],
          'src/annotated/manga-app/search.controller.min.js': ['src/annotated/manga-app/search.controller.js'],
          'src/annotated/manga-app/results.controller.min.js': ['src/annotated/manga-app/results.controller.js'],
          'src/annotated/manga-app/home.controller.min.js': ['src/annotated/manga-app/home.controller.js'],
          'src/annotated/manga-app/manga-result.directive.min.js': ['src/annotated/manga-app/manga-result.directive.js'],
          'src/annotated/manga-app/chapter.controller.min.js': ['src/annotated/manga-app/chapter.controller.js'],
        },
      },
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
          'src/bower_components/wow/dist/wow.min.js',
          'src/annotated/mangascraper/service.min.js',
          'src/annotated/manga-core/service.min.js',
          'src/annotated/manga-app/app.min.js',
          'src/annotated/manga-app/search.controller.min.js',
          'src/annotated/manga-app/results.controller.min.js',
          'src/annotated/manga-app/home.controller.min.js',
          'src/annotated/manga-app/manga-result.directive.min.js',
          'src/annotated/manga-app/chapter.controller.min.js',
        ],
        dest: 'src/built.js',
      },
    },
  });

  grunt.registerTask('default', ['ngAnnotate', 'uglify', 'concat,' 'browserSync']);
};
