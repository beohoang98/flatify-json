/**
 *
 * @param {Object} json
 * @returns {Object}
 */
function flatify(json) {
    if (typeof json !== "object") throw new TypeError("Invalid Argument");
    return flatify_recur("", json);
}

/**
 *
 * @param {String} parentKey
 * @param {Object} json
 * @param {Object} mapKey
 * @returns {*} child Object
 */
function flatify_recur(parentKey, json) {
    const newObject = {};
    for (const key of Object.keys(json)) {
        const outKey = !!parentKey ? `${parentKey}.${key}` : key;
        if (typeof json[key] === "object") {
            if (Array.isArray(json[key])) {
                const childObj = json[key].map(el => flatify_recur("", el));
                newObject[outKey] = childObj;
            } else {
                const childObj = flatify_recur(outKey, json[key]);
                Object.assign(newObject, childObj);
            }
        } else {
            newObject[outKey] = json[key];
        }
    }
    return newObject;
}

/**
 *
 * @param {Object} flatified_json
 * @returns {Object}
 */
function flatify_clean(flatified_json) {}

module.exports = {
    flatify,
    default: flatify
};
