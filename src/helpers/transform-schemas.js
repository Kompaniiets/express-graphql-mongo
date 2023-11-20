const { ORGANIZATION } = require('../common/model-name.constants');

const organizationSchema = {
  modelName: ORGANIZATION,
  schema: {
    organization_id: null,
    name: null,
    website: null,
    country: null,
    description: null,
    founded: (value) => Number(value),
    industry: null,
    number_of_employees: (value) => Number(value)
  }
};

module.exports = {
  organizationSchema
}
