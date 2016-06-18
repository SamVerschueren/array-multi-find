'use strict';
module.exports = (array, elements) => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected \`array\` to be an \`Array\`, got \`${typeof array}\``);
	}

	if (!Array.isArray(elements)) {
		throw new TypeError(`Expected \`elements\` to be an \`Array\`, got \`${typeof elements}\``);
	}

	const ret = [];

	for (const element of elements) {
		if (array.indexOf(element) !== -1) {
			ret.push(element);
		}
	}

	return ret;
};
