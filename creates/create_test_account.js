const perform = (z, bundle) => {
  const options = {
    url: 'https://api.test.datacite.org/providers',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: {
      data: {
        attributes: {
          symbol: bundle.inputData.symbol,
          name: bundle.inputData.name,
          displayName: bundle.inputData.displayName,
          systemEmail: bundle.inputData.systemEmail,
          passwordInput: bundle.inputData.passwordInput,
          confirmPasswordInput: bundle.inputData.confirmPasswordInput,
        },
        type: 'providers',
      },
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'symbol',
        label: 'Account ID',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'displayName',
        label: 'Display Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'systemEmail',
        label: 'System Email',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'passwordInput',
        label: 'Password',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'confirmPasswordInput',
        label: 'Confirm Password',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'create_test_account',
  noun: 'Account',
  display: {
    label: 'Create Test Member Account',
    description: 'Create a Test Account in Fabrica for a Member',
    hidden: false,
    important: true,
  },
};
