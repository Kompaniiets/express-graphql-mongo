const { Schema, model } = require('mongoose');
const { ORGANIZATION } = require('../common/model-name.constants');

const organizationSchema = new Schema({
  organization_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  founded: {
    type: Number
  },
  industry: {
    type: String,
    trim: true
  },
  number_of_employees: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Organization = model(ORGANIZATION, organizationSchema);

module.exports = Organization;

