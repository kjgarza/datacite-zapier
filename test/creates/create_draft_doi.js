/* eslint-disable no-undef */
require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('Create - create_draft_doi', () => {
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
      App.creates.create_draft_doi.operation.perform,
      bundle,
    );
    result.should.not.be.an.Array();
  });
});
