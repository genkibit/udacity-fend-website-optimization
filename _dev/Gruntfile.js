module.exports = function(grunt) {

'use strict';

	/** PROJECT CONFIGURATION **/
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Checks for errors and redundancy in JavaScript code.
		jshint: {
			options: {
				force: true
			},

			// Files to apply code linting.
			files: ["project-04/_dev/views/js/main_canvas.js", "project-04/_dev/views/js/main_transform.js"]
		},

		// Minifies JS.
		uglify: {
			options: {
				mangle: true
			},
			my_target: {

				// "outputFile" : ["analyzedFile"]
				files: {
					"project-04/views/js/main_transform.min.js": ["project-04/_dev/views/js/main_transform.js"],
					"project-04/views/js/main_canvas.min.js": ["project-04/_dev/views/js/main_canvas.js"]
				}
			}
		},

		// Minifies CSS.
		cssmin: {
			target: {
				files: {

					// "outputFile" : ["analyzedFile"]
					"project-04/css/style.min.css": ["project-04/_dev/css/style.css"]
				}
			}
		},

		// Minifies HTML code.
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: {

					// "destinationFile" : "sourceFile" 
					"project-04/index.html":"project-04/_dev/index.html",
					"project-04/project-2048.html":"project-04/_dev/project-2048.html",
					"project-04/project-mobile.html":"project-04/_dev/project-mobile.html",
					"project-04/project-webperf.html":"project-04/_dev/project-webperf.html",
					"project-04/views/pizza.html":"project-04/_dev/views/pizza.html"
				}
			}
		}
	});

	/** DEPENDENT PLUGINS **/
	// grunt.loadNpmTasks("");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");

	/** DEFAULT TASKS **/
	grunt.registerTask("build", ["jshint", "uglify", "cssmin", "htmlmin"]);
};