module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	jshint: {
  		dist: {
  			options: {
  				force: true,
  				reporter: require('jshint-stylish')
  			},
  			files: {
  				src: ['js/sharelinks.js']
  			}
  		}
  	},
  	uglify: {
  		options: {
  			mangle: false,
  			compress: false
  		},
  		dist: {
  			files: {
  				'js/sharelinks.min.js': ['js/sharelinks.js']
  			}
  		}
  	},
  	watch: {
  		dist: {
  			files: ['js/sharelinks.js'],
  			tasks: ['default'],
  			options: {
  				nospawn: true
  			}
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify']);

};
