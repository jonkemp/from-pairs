const { getLength } = require('@jonkemp/package-utils');

module.exports = (list, values) => {
	const result = {};

	for (let i = 0, length = getLength(list); i < length; i++) {
		if (values) {
			result[list[i]] = values[i];
		} else {
			const [zero, one] = list[i];

			result[zero] = one;
		}
	}

	return result;
};
