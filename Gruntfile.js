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
        quoteChar: '\'',
        rename: function (moduleName) {
          return moduleName.replace('.html', '');
        }
      },
      'compiled-module-templates': {
        src: ['app/src/modules/**/*.tpl.html'],
        dest: 'app/src/shared/compiled-module-templates.js'
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'app/src/**/*.js']
    },

    uglify: {
      dist: {
        files: {
          'app/dist/app.min.js': [
            'app/src/shared/**/*.js',
            'app/src/modules/**/*.js'
          ]
        }
      }
    },

    less: {
      dist: {
        options: {
          // paths: ["assets/css"],
          cleancss: true
          // modifyVars: {
          //   imgPath: '"http://mycdn.com/path/to/images"',
          //   bgColor: 'red'
          // }
        },
        files: {
          'app/dist/app.min.css': [
            'app/src/shared/**/*.css',
            'app/src/modules/**/*.css'
          ]
        }
      }
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['htmlConvert', 'includeSource', 'jshint']);
  grunt.registerTask('dist', ['default', 'uglify', 'less']);

};
