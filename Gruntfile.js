module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    includeSource: {
      options: {
        basePath: 'app',
        baseUrl: '/',
      },
      includes: {
        files: {
          'app/index.html': 'app/src/index.html'
        }
      }
    },

    htmlConvert: {
      options: {
        base: 'app/src/modules',
        rename: function (moduleName) {
          return moduleName.replace('.html', '');
        }
      },
      templates: {
        src: ['app/src/modules/**/*.tpl.html'],
        dest: 'app/src/templates.js'
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'app/src/**/*.js']
    },

    watch: {
      scripts: {
        files: ['app/src/**/*'],
        tasks: ['htmlConvert', 'includeSource'],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-html-convert');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['htmlConvert', 'includeSource', 'jshint']);

};