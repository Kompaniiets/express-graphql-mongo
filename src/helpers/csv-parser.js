const { parse } = require('csv-parse');

exports.parseCsv = (options = {}) => {
  return parse({
    columns: true,
    skip_empty_lines: true,
    delimiter: ';',
    ...options
  });
};
