// Copyright © 2024 Champion Estates LLC
const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion
};

let jsonContent = JSON.stringify(jsonData);

fs.writeFile('./meta.json', jsonContent, 'utf8', (err) => {
  if (err) {
      return console.error(err);
  }
});