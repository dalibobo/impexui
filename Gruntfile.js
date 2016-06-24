module.exports = function(grunt) {
	var path = ".";
	var build = path + "/";
	var src = path + "/src";
	var allPath = build + '/impexs.js';
	var minPath = build + "/impexs.min.js";
	
	var cfiles = {};
	cfiles[allPath] = [
		src + "/impex.util.js",
		src + "/impex.service.js",
		src + "/impex.directive.js",
		src + "/impex.filter.js",
		src + "/impex.component.js",
		src + "/is.min.js",
		src + "/underscore-min.js"
	];
	var ufiles = {};
	ufiles[minPath] = build + '/impexs.js';
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
			all: [build + '/impexs.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('concatjs', ['concat']);
	grunt.registerTask('compressjs',['concat', 'uglify']);
	grunt.registerTask('default');
};