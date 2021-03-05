const authentication = require('./authentication');
const createTestAccountCreate = require('./creates/create_test_account.js');
const createProductionAccountCreate = require('./creates/create_production_account.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  creates: {
    [createTestAccountCreate.key]: createTestAccountCreate,
    [createProductionAccountCreate.key]: createProductionAccountCreate,
  },
  authentication: authentication,
};
