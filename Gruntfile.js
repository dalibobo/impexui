module.exports = function(grunt) {
	var path = ".";
	var build = path + "/";
	var src = path + "/src";
	var allPath = build + '/impexui.all.js';
	var minPath = build + "/impexui.min.js";
	
	var cfiles = {};
	cfiles[allPath] = [
		src + "/watch.min.js",
		src + "/zepto.js",
		src + "/impex.util.js",
		src + "/impex.validate.js",
		src + "/is.min.js",
		src + "/underscore-min.js",
		src + "/alertify.min.js",
		src + "/directives/*.js",
		src + "/filters/*.js",
		src + "/components/*.js"
	];
	var ufiles = {};
	ufiles[minPath] = build + '/impexui.all.js';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\r\n',
			},
			basic_and_extras: {
			  files: cfiles
			}
		},
		uglify: {
			compressjs: {
				files: ufiles
			}
		},
		jshint: {
			all: [build + '/impexui.all.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('concatjs', ['concat']);
	grunt.registerTask('compressjs',['concat', 'uglify']);
	grunt.registerTask('default');
};