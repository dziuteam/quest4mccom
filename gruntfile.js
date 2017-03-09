module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
	browserSync: {
    	dev: {
        	bsFiles: {
            	src : [
                	'app/css/*.css',
                	'app/*.html'
                    ]
                },
        	options: {
            	watchTask: true,
            	server: './app'
            }
        }
    }
});
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass','browserSync']);
};