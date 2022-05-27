const path = require('path')

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setup.js')],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.svg$': path.resolve(__dirname, 'fileTransformer.js'),
	},
	modulePaths: ['src'],
	moduleNameMapper: {
		'^@/(.*)$': '$1',
	}
}
