/* eslint-disable no-undef */
require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('Create - create_production_account', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },

      inputData: {},
    };

    const result = await appTester(
      App.creates.create_production_account.operation.perform,
      bundle,
    );
    result.should.not.be.an.Array();
  });
});
