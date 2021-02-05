module.exports = {
	"plugins": [
		"stylelint-order",
		"stylelint-a11y"
	],
	"extends": [
		"stylelint-config-standard",
		"stylelint-a11y/recommended"
	],
	"rules": {
		/* use tabs because spaces suck for accessibility users. */
		"indentation": "tab",
		"number-leading-zero": null
	}
}
