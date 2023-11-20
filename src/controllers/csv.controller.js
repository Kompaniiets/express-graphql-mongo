const { pipeline } = require('stream');
const Busboy = require('busboy');

const { parseCsv } = require('../helpers/csv-parser');
const { csvParserTransform, databaseSaverTransform } = require('../services/csv.service');
const { organizationSchema } = require('../helpers/transform-schemas');

exports.parseAndSaveCsvFile = async(req, res) => {
  try {
    const busboy = Busboy({ headers: req.headers });

    busboy.on('file', (name, file, info) => {
      pipeline(
        file,
        parseCsv(),
        csvParserTransform(organizationSchema.schema),
        databaseSaverTransform(organizationSchema.modelName),
        (err) => {
          if(err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).send('CSV file uploaded and processed successfully.');
          }
        }
      );
    });

    req.pipe(busboy);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};
