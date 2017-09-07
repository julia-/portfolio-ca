// intergrate postcss with stylus
var postcss = function() {
  return require('poststylus')(['autoprefixer', 'rucksack-css']);
};

module.exports = function (grunt) {

  // configure tasks
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'src/js/',
        src: ['**'],
        dest: 'build/js/'
      }
    },
    clean: {
      build: {
        src: ['build'],
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
          src: ['**/*.styl'],
          dest: 'build/css/',
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
          dest: 'build/',
          ext: '.html'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
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
          base: 'build',
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
          src: ['**/*.{gif,jpg,png}'],
          cwd: 'src/',
          dest: 'build/'
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