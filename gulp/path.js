/*!!
 * 
 * gulp path
 * @author: Jan Sanchez
 *
 */

var Path = {};

Path.src = { folder: 'source/' };
Path.src.coffee = {};
Path.src.coffee.folder = Path.src.folder + 'coffee/';
Path.src.coffee.package = Path.src.coffee.folder + 'package/';
Path.src.coffee.test = Path.src.coffee.folder + 'test/';
Path.src.coffee.bin = Path.src.coffee.folder + 'bin/';


Path.dest = {};
Path.dest.folder = '';
Path.dest.js = {};
Path.dest.js.package = Path.dest.folder + 'dist/';
Path.dest.js.test    = Path.dest.folder + 'test/';
Path.dest.js.bin    = Path.dest.folder + 'bin/';

/* Coffee Path */
Path.coffee = {
	default : {
		src: [
			Path.src.coffee.folder + '**/*.coffee',
			'!' + Path.src.coffee.folder + '_**/*.coffee',
			'!' + Path.src.coffee.folder + '**/_*.coffee'
		],
		dest: Path.dest.js.package
	},	
	package : {
		src: [
			Path.src.coffee.package + '**/*.coffee',
			'!' + Path.src.coffee.package + '_**/*.coffee',
			'!' + Path.src.coffee.package + '**/_*.coffee'
		],
		dest: Path.dest.js.package
	},
	test : {
		src: [
			Path.src.coffee.test + '**/*.coffee',
			'!' + Path.src.coffee.test + '_**/*.coffee',
			'!' + Path.src.coffee.test + '**/_*.coffee'
		],
		dest: Path.dest.js.test
	},
	bin : {
		src: [
			Path.src.coffee.bin + '**/*.coffee',
			'!' + Path.src.coffee.bin + '_**/*.coffee',
			'!' + Path.src.coffee.bin + '**/_*.coffee'
		],
		dest: Path.dest.js.bin
	}

};


/* Javascript Path */
Path.javascript = {
	lint: [
		Path.dest.js.package + '**/*.js',
		Path.dest.js.test + '**/*.js',
		Path.dest.js.bin + '**/*.js'
	],
	complexity: [
		Path.dest.js.package + '**/*.js',
		Path.dest.js.test + '**/*.js',
		Path.dest.js.bin + '**/*.js'
	]
};


/* Clean Path */
Path.clean = {
	js: {
		package: [
			Path.dest.js.package + '**/*.*'
		],
		test: [
			Path.dest.js.test + '**/*.js',
			Path.dest.folder + 'dist/test/'
		],
		bin: [
			Path.dest.folder + 'dist/bin/'
		]
	}
};


/* Copy Path */
Path.copy = {
	js: {
		test: {
			base: Path.dest.folder,
			src: [
				Path.dest.folder + 'dist/test/**/*.*'
			],
			dest: Path.dest.js.test
			
		},
		bin: {
			base: Path.dest.folder,
			src: [
				Path.dest.folder + 'dist/bin/**/*.*'
			],
			dest: Path.dest.js.bin
			
		}
	}
};


/* Mocha Path */
Path.mocha = {
	js: {
		test: ['test/**/*.js']
	}
};



/* Watch Paths */
Path.watch = {
	coffee: [Path.src.coffee.folder + '**/*.coffee']
};


module.exports = Path;

