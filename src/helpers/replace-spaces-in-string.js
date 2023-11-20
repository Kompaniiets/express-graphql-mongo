exports.replaceSpacesInString = (value, separator = '_') => {
  if(typeof value !== 'string') {
    throw new Error('Value should be string type.');
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, separator);
};
