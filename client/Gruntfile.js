// Generated on 2013-09-12 using generator-webapp 0.4.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  var path = require('path');

  // configurable paths
  var yeomanConfig = {
    //This is the directory where development work is done
    app: 'app',
    //This is the directory the app will be served from
    dist: 'default'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      //generate css files everytime when .less files changed
      recess: {
        files: ['<%= yeoman.app %>/css/{,*/}*.less'],
        tasks: ['recess']
      },
      //generate handlebars template files
      handlebars: {
        files: ['<%= yeoman.app %>/scripts/templates/{,*/}*.hbs'],
        tasks: ['handlebars']
      },
      //copy css files to temp directory to add css prefixes
      styles: {
        files: ['<%= yeoman.app %>/css/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      //this will auto reload the app in the browser when any file in the app dir is changed
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/js/{,*/}*.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '<%= yeoman.app %>/scripts/templates/{,*/}*.js',
          '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    //setup http server to serve the app, also enable live reload
    connect: {
      options: {
        port: 9008,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            yeomanConfig.app
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
            yeomanConfig.app,
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: yeomanConfig.dist
        }
      }
    },
    //clean the project
    clean: {
      options: {
        force: true
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    //setup the jshint task
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/{,*/}*.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    //setup the jasmine tests
    jasmine: {
      all: {
        src: ['<%= yeoman.app %>/scripts/namespace.js',
              '<%= yeoman.app %>/scripts/templates/generated/templates.js',
              '<%= yeoman.app %>/scripts/routers/index.js',
              '<%= yeoman.app %>/scripts/models/page.js',
              '<%= yeoman.app %>/scripts/views/navbar.view.js',
              '<%= yeoman.app %>/scripts/views/intro.view.js',
              '<%= yeoman.app %>/scripts/views/viewbase.view.js',
              '<%= yeoman.app %>/scripts/views/main.view.js',
              '<%= yeoman.app %>/scripts/views/cloudcall.view.js',
              '<%= yeoman.app %>/scripts/views/stats.view.js',
              '<%= yeoman.app %>/scripts/views/nodepage.view.js',
              '<%= yeoman.app %>/scripts/views/databrowser.view.js',
              '<%= yeoman.app %>/scripts/views/weather.view.js',
              '<%= yeoman.app %>/scripts/views/integration.view.js',
              '<%= yeoman.app %>/scripts/init.js'
        ],
        options: {
          vendor: ['<%= yeoman.app %>/js/vendor/modernizr-2.6.2.min.js',
                   '<%= yeoman.app %>/js/helper.js',
                   '<%= yeoman.app %>/js/plugins.js',
                   '<%= yeoman.app %>/js/effeckt.js',
                   '<%= yeoman.app %>/bower_components/jquery/jquery.js',
                   '<%= yeoman.app %>/bower_components/underscore/underscore.js',
                   '<%= yeoman.app %>/bower_components/handlebars/handlebars.runtime.js',
                   '<%= yeoman.app %>/bower_components/backbone/backbone.js',
                   '<%= yeoman.app %>/bower_components/bootstrap/dist/js/bootstrap.js'
          ],
          helpers: ['test/mock/fh-init.js'],
          specs: 'test/spec/{,*/}*.js'
          //uncomment these to enable code coverage report
          /*
          ,template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'rep/coverage/coverage.json',
            report: {
              type: 'html',
              options: {
                dir: 'rep/coverage/html'
              }
            }
          }*/
        }
      }
    },
    //setup task to generate css files from less files
    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
          '<%= yeoman.app %>/css/main.css': ['<%= yeoman.app %>/css/main.less'],
          '<%= yeoman.app %>/css/app.css': ['<%= yeoman.app %>/css/app.less']
        }
      }
    },
    //setup tasks to add css prefix 
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },
    //setup tasks to generate handlebars templates
    handlebars: {
      compile: {
        options: {
          namespace: 'App.Templates',
          processName: function(filePath) {
            var fileName = path.basename(filePath);
            return fileName.split('.')[0];
          }
        },
        files: {
          '<%= yeoman.app %>/scripts/templates/generated/templates.js': ['<%= yeoman.app %>/scripts/templates/source/{,*/}*.hbs']
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
            dist: {}
        },*/
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
            dist: {}
        },*/
    //setup tasks to prefix files with a revision number to clear client side browser cache
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js'
          ]
        }
      }
    },
    //prepare for minification task
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.app %>/index.html'
    },
    //setup the task to do minification
    usemin: {
      options: {
        dirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html']
    },
    //minify png & jpeg images
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    //minify svg files
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    //minify css files, already taken care of by usemin
    cssmin: {
      // This task is pre-configured if you do not wish to use Usemin
      // blocks for your CSS. By default, the Usemin block from your
      // `index.html` will take care of minification, e.g.
      //
      //     <!-- build:css({.tmp,app}) styles/main.css -->
      //
      //dist: {
      //  files: {
      //    '<%= yeoman.dist %>/css/main.css': [
      //      '.tmp/css/{,*/}*.css'
      //    ]
      //  }
      //}
    },
    //minify html file
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    //copy files from the development directory to the distribution directory
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'img/{,*/}*.{webp,gif}',
            'fonts/{,*/}*.*'
          ]
        }]
      },
      styles: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/font/',
          dest: '<%= yeoman.app %>/fonts/font-awesome',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/fonts/',
          dest: '<%= yeoman.app %>/fonts/glyphicons',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          dest: '.tmp/css/',
          src: '{,*/}*.css'
        }]
      }
    },
    //run grunt tasks concurrently to improve build time
    concurrent: {
      server: [
        'recess',
        'handlebars',
        'copy:styles'
      ],
      test: [
        'recess',
        'handlebars',
        'copy:styles'
      ],
      dist: [
        'recess',
        'handlebars',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  //grunt server tasks
  grunt.registerTask('server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  //grunt test tasks
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'jasmine'
  ]);

  //grunt build tasks
  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin'
  ]);

  //grunt tasks
  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};