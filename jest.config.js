module.exports = {
	reporters: [
	'default',
	['jest-junit', { outputDirectionary: 'reports', outputName: 'report.xml' }],
	],
};
