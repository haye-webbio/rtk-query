const config = {
  schemaFile: 'https://test.blackfridaynederland.nl/dev/docs/json',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/blackfridayApi.ts',
  exportName: 'blackfridayApi',
  hooks: true,
}

module.exports = config;

