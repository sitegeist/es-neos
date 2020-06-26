"use strict";

export default () => {
	return {
		"presets": [
			"@babel/preset-env",
			"@babel/preset-react",
			"@babel/preset-typescript"
		],
		"plugins": [
			["@babel/plugin-proposal-decorators", {
				"legacy": true
			}],
			["@babel/plugin-proposal-object-rest-spread"],
			["@babel/plugin-transform-runtime"]
		]
	};
};
