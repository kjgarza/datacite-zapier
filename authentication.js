module.exports = {
  type: 'basic', 
  test: {
    url: 'https://api.datacite.org/providers', 
    method: 'GET',
    params: { username: process.env.USERNAME, password: process.env.PASSWORD }, 
    headers: {}, 
    body: {}, 
    removeMissingValuesFrom: {}, 
  },
  basicConfig: {}, 
};
