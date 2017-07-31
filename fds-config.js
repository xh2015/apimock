module.exports = {
	basePath: __dirname,
	mockFolder: 'mocks',
	routeFile: 'routes.js',
	mockExts: ['.js', '.json'],
	proxy: null,
	port: 9999,
	enableJava: false,
	javaServerPort: 12321,
	livereload: true,
	open: {
		route: '/',
		browser: ['google chrome']
	}
};
