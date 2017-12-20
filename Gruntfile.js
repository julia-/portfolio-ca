// intergrate postcss with stylus
var postcss = function() {
  return require('poststylus')(['autoprefixer', 'rucksack-css']);
};

module.exports = function (grunt) {
  // configure tasks
  grunt.initConfig({
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/assets/js',
          src: ['**'],
          dest: 'dest/assets/js',
        }]
      },
      fonts: {
        files: [{
          expand: true,
          cwd: 'src/assets/fonts',
          src: ['**'],
          dest: 'dest/assets/fonts',
        }]
      },
      doc: {
        files: [{
          expand: true,
          cwd: 'src/assets/doc',
          src: ['**'],
          dest: 'dest/assets/doc',
        }]
      },
      logo: {
        files: [{
          expand: true,
          cwd: 'src/assets/img',
          src: ['**/*.png'],
          dest: 'dest/assets/img',
        }]
      },
      lib: {
        files: [{
          expand: true,
          cwd: 'src/assets/lib',
          src: ['**/*.png'],
          dest: 'dest/assets/lib',
        }]
      },
      static: {
        files: [{
          expand: true,
          cwd: 'src/assets/static',
          src: ['**'],
          dest: 'dest/assets/static',
        }]
      }
    },
    clean: {
      build: {
        src: ['dest'],
      }
    },
    stylus: {
      compile: {
        options: {
          use: [postcss]
          // linenos: false,
          // compress: false
        },
        files: [{
          expand: true,
          cwd: 'src/stylus/',
          src: ['**/style.styl'],
          dest: 'dest/assets/css/',
          ext: '.css',
        }]
      }
    },
    pug: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'src/pug/',
          src: ['*.pug'],
          dest: 'dest/',
          ext: '.html'
        }]
      }
    },
    watch: {
      options: {
        livereload: {
          host: 'localhost',
          port: 9001
        }
      },
      stylus: {
        files: 'src/**/*.styl',
        tasks: ['stylus']
      },
      pug: {
        files: 'src/**/*.pug',
        tasks: ['pug']
      },
      copy: {
        files: ['src/**', '!src/**/*.styl', '!src/**/*.pug'],
        tasks: ['copy']
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dest',
          hostname: '*'
        }
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          newFilesOnly: true,
          sizes: [{
            name: '320',
            width: 320,
            quality: 100
          },
          {
            name: '640',
            width: 640,
            quality: 100
          },
          {
            name: '960',
            width: 960,
            quality: 100
          },
          {
            name: '1280',
            width: 1280,
            quality: 100
          },
          {
            name: '1600',
            width: 1600,
            quality: 100
          },
          {
            name: '1920',
            width: 1920,
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg}'],
          cwd: 'src/assets/img',
          dest: 'dest/assets/img'
        }]
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // define tasks
  grunt.registerTask('images', ['responsive_images']);
  grunt.registerTask('build', ['clean:build', 'images', 'copy', 'stylus', 'pug']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};