const { configure }  = require('@testing-library/dom')

require('@testing-library/jest-dom')

configure({
	computedStyleSupportsPseudoElements: true,
})
