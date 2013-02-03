module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

    concat: {
            debug: {
                src: ['dev/lib/core/App.namespace.js'],
                dest: 'debug/js/test.js'
            }
        }

         /*
        concat: {
            options: {

            },

            files: {
                'debug/js/test.js': ['dev/lib/core/namespace.js', 'dev/lib/init.js']
            }
        }
        */


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //grunt.loadNpmTasks('grunt-lib-legacyhelpers');
    //grunt.loadNpmTasks('grunt-lib-phantomjs');


    // NPM plugins we - won't be using these...
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-contrib-internal');       */
};