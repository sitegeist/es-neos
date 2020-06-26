"use strict";

module.exports =  {
	"extends": "stylelint-config-standard",
	"rules": {
		"color-no-invalid-hex": true,
		"declaration-block-no-redundant-longhand-properties": true,
		"indentation": "tab",
		"no-empty-source": [
			true,
			{
				"severity": "warning"
			}
		],
		"number-leading-zero": "never",
		"selector-pseudo-class-no-unknown": [
			true,
			{
				"ignorePseudoClasses": ["global"]
			}
		],
		"shorthand-property-no-redundant-values": true,
	}
};