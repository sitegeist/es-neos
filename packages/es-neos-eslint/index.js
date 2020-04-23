"use strict";

export default {
	"parser": "babel-eslint",
	"extends": [
		"xo/esnext",
		"xo-react",
		"xo-typescript"
	],
	"env": {
		"browser": true,
		"node": true,
		"jest": true
	},
	"rules": {
		"comma-dangle": ["error", {
		"arrays": "only-multiline",
		"objects": "only-multiline"
		}],
		"no-unused-expressions": ["error", {
		"allowShortCircuit": true
		}],
		"react/no-danger": false,
		"quotes": ["error", "single", {
		"allowTemplateLiterals": true
		}]
	},
	"globals": {
		"renderComponent": true
	}
};
