const { replaceSpacesInString } = require('./replace-spaces-in-string');

exports.transformCsvToSchema = (chunk, rowSchema = {}) => {
  const result = {};

  for(const [key, value] of Object.entries(chunk)) {
    let schemaValue = value;
    const property = replaceSpacesInString(key);
    const transform = rowSchema[property] || null;

    if(typeof transform === 'function') {
      schemaValue = transform(value);
    }

    result[property] = schemaValue;
  }

  return result;
};
