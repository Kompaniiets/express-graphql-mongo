const { Transform } = require('stream');

class BaseTransform extends Transform {
  constructor(options) {
    super({
      ...options,
      readableObjectMode: true,
      writableObjectMode: true
    });
  }

  _transform(chunk, encoding, callback) {
    // Implement the base transformation logic here
    this.push(chunk);
    callback();
  }
}

module.exports = BaseTransform;
