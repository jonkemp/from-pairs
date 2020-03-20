const shallowProperty = key => obj => obj == null ? void 0 : obj[key];

const getLength = shallowProperty('length');

module.exports = (list, values) => {
	const result = {};
	for (let i = 0, length = getLength(list); i < length; i++) {
		if (values) {
			result[list[i]] = values[i];
		} else {
			result[list[i][0]] = list[i][1];
		}
	}
	return result;
};
