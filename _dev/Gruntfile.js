module.exports = function(grunt) {

'use strict';

	/** PROJECT CONFIGURATION **/
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Starts a connect web server
		// npmjs.com/package/grunt-contrib-connect
		// https://funkycold.wordpress.com/2015/02/28/learning-grunt-grunt-contrib-connect/
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '0.0.0.0',
					keepalive: true
				}
			}
		},

   // Duplicates files and folders
    // npmjs.com/package/grunt-contrib-copy
    copy: {
      main: {
        files: [
          { expand: true, cwd: 'img/', src:'**', dest: '../img/' },
          { expand: true, cwd: 'docs/', src:'**', dest: '../' },
					{ expand: true, cwd: 'views/css/', src:'**', dest: '../views/css/' },
					{ expand: true, cwd: 'views/images/', src:'**', dest: '../views/images/' },
					{ expand: true, cwd: 'views/js/', src:'resources.js', dest: '../views/js/' }
        ],
      },
    },

		// Minifies CSS
    // npmjs.com/package/grunt-contrib-cssmin
		cssmin: {
			target: {
				files: {

					// 'outputFile' : ['analyzedFile']
					'css/style.min.css': ['css/style.css']
				}
			}
		},

		// Minifies HTML code
    // npmjs.com/package/grunt-contrib-htmlmin
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: {

					// 'destinationFile' : 'sourceFile' 
					'../index.html':'index.html',
					'../project-2048.html':'project-2048.html',
					'../project-mobile.html':'project-mobile.html',
					'../project-webperf.html':'project-webperf.html',
					'../views/pizza.html':'views/pizza.html'
				}
			}
		},

		// Checks for errors and redundancy in JavaScript code
    // npmjs.com/package/grunt-contrib-jshint
    // jshint.com/docs/options/
		jshint: {
      options: {
        force: true,
        strict: 'global',
				globals: {
					'window': true,
					'document': true,
					'clearTimeout': true,
					'console': true,
					'Resources': true
				}
      },

			files: ['views/js/main_canvas.js', 'views/js/main_transform.js']
		},

		// Minifies JS
    // npmjs.com/package/grunt-contrib-uglify
		uglify: {
			options: {
				mangle: true
			},

			my_target: {

				// 'outputFile' : ['analyzedFile']
				files: {
					'../views/js/main_transform.min.js': ['views/js/main_transform.js'],
					'../views/js/main_canvas.min.js': ['views/js/main_canvas.js']
				}
			}
		},
	});


	/** DEPENDENT PLUGINS **/
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	/** DEFAULT TASKS **/
	grunt.registerTask('build', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'copy']);
};