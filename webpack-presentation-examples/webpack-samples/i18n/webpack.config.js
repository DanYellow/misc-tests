const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin = require("i18n-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin')

var languages = {
	"en": null,
	"fr": require("./src/i18n/fr.json"),
	"es": require("./src/i18n/es.json"),
};

module.exports = Object.keys(languages).map(function(language) {
	return {
		name: language,
		entry: './src/main.js',
		output: {
			path: path.join(__dirname, "dist"),
			filename: language + ".bundle.js"
		},
		plugins: [
			new I18nPlugin(
				languages[language],
            ),
            new HtmlWebpackPlugin({
                title: 'My App',
                filename: `index.${language}.html`,
                template: 'src/i18n/tpl/index.html'
            }),
		]
	};
});