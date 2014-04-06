var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  
  // load grunt tasks
  require('load-grunt-tasks')(grunt);

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        options: {
            nospawn: true
        },
        
        livereload: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            files: [
            	'app/favicon.ico',
                'app/**/*.html',
                'app/css/{,*/}*.css',
                'app/js/**/*.js',
                'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    },

    connect: {
        options: {
            port: 9000,
            // change this to 'localhost' to prevent access to the server from outside
            hostname: '0.0.0.0'
        },

        livereload: {
            options: {
                middleware: function (connect) {
                    return [
                        mountFolder(connect, 'app'),
                        lrSnippet
                    ];
                }
            }
        }
    },

    open: {
        server: {
            path: 'http://localhost:<%= connect.options.port %>'
        }
    },

      // testing with karma
      karma: {
          options: {
              configFile: 'karma.conf.js',
              autoWatch: true
          },

          single: {
              singleRun: true
          },

          continuous: {
              singleRun: false
          }
      },

      // protractor
      protractor: {
          continuous: {
              keepAlive: true, // If false, the grunt process stops when the test fails.
              noColor: false, // If true, protractor will not use colors in its output.
              configFile: "protractor.conf.js" // Target-specific config file
          }
      }
  });

  grunt.registerTask('server', function () {
          grunt.task.run([
              'connect:livereload',
              'open',
              'watch'
          ]);
      });

    // test
    grunt.registerTask('test', function (target) {
        if (target !== 'continuous') {
            return grunt.task.run(['karma:single', 'connect:livereload', 'protractor:continuous']);
        }

        grunt.task.run(['karma:continuous']);
    });
};