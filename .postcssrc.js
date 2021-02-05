const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');
const cssNano = require('cssnano');
const stylelint = require('stylelint');

const postcssConfig = {
	plugins: [
		postcssImport({
			plugins: [
				stylelint()
			]
		}),
		postcssPresetEnv({
			stage: 1,
			features: {
				'nesting-rules': true,
			}
		}),
		postcssReporter({
			clearReportedMessages: true
		})
	]
};

if (process.env.NODE_ENV === 'prod') {
	postcssConfig.push(
		cssNano({
			preset: 'default'
		})
	)
}

module.exports = postcssConfig;
