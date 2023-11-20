const mongoose = require('mongoose');
const { transformCsvToSchema } = require('../helpers/transform-csv-to-schema');
const BaseTransform = require('../common/base-transform');

async function saveToDatabase(data, model) {
  const Model = mongoose.model(model);
  const modelToSave = new Model(data);
  const savedModel = await modelToSave.save();

  return savedModel.toJSON();
}

const csvParserTransform = (schema) => {
  return new BaseTransform({
    transform: function(chunk, encoding, callback) {
      try {
        const result = transformCsvToSchema(chunk, schema);
        this.push(result);

        callback();
      } catch(err) {
        callback(err);
      }
    }
  });
};

const databaseSaverTransform = (model) => {
  return new BaseTransform({
    transform: async function(chunk, encoding, callback) {
      try {
        await saveToDatabase(chunk, model);
        callback();
      } catch(err) {
        callback(err);
      }
    }
  });
};

module.exports = {
  csvParserTransform,
  databaseSaverTransform
};
