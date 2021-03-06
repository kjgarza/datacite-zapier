const perform = (z, bundle) => {
  const options = {
    url: 'https://api.test.datacite.org/dois',
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    body: {
      data: {
        attributes: {
          prefix: bundle.inputData.prefix,
          url: bundle.inputData.url,
          titles: [{ title: bundle.inputData.title }],
          publisher: bundle.inputData.publisher,
          publicationYear: bundle.inputData.publicationYear,
          dates: [{
            date: bundle.inputData.date,
            dateType: 'dateIssued',
          }],
          types: { resourceTypeGeneral: bundle.inputData.resourceTypeGeneral },
          creators: [{
            name: bundle.inputData.creatorName,
            nameType: bundle.inputData.creatorNameType,
          }],
          descriptions: [{ description: bundle.inputData.description }],
          subjects: [{
            subject: bundle.inputData.fieldOfScience,
            schemeUri: 'http://www.oecd.org/science/inno/38235147.pdf',
            subjectScheme: 'Fields of Science and Technology (FOS)',
          }],
          rightsList: [{
            rights: bundle.inputData.rights,
            rightsUri: bundle.inputData.rightsUri,
          }],
          state: 'draft',
        },
        type: 'dois',
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
    perform,
    inputFields: [
      {
        key: 'prefix',
        label: 'The DOI Prefix',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'fieldOfScience',
        label: 'Resources` Field Of Science',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'url',
        label: 'URL',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'title',
        label: 'Title of the resource',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'publisher',
        label: 'Publisher',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'publicationYear',
        label: 'Publication Year',
        type: 'number',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'date',
        label: 'Date Issued',
        type: 'datetime',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'resourceTypeGeneral',
        label: 'Resource Type',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'creatorName',
        label: 'Creator Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'creatorNameType',
        label: 'Creator Name Type',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'rights',
        label: 'Resource License',
        helpText: 'Choose a License from the https://spdx.org/licenses/ list',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'rightsUri',
        label: 'Resource License URI',
        helpText: 'Choose a License from the https://spdx.org/licenses/ list',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'create_draft_doi',
  noun: 'DOI',
  display: {
    label: 'Create Draft DOI',
    description: 'Create a Draft DOI',
    hidden: false,
    important: true,
  },
};
