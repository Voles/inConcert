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
                'app/index.html',
                'app/css/{,*/}*.css',
                'app/js/{,*/}*.js',
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
    }

  });

  grunt.registerTask('server', function (target) {

          grunt.task.run([
              'connect:livereload',
              'open',
              'watch'
          ]);
      });
};