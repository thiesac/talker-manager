const fs = require('fs').promises;
const path = require('path');

const talkerManager = path.resolve(__dirname, './talker.json');

async function writeFile() {
  const json = await fs.writeFile(talkerManager, 'utf-8');
  const data = JSON.parse(json);
  return data;
}

module.exports = writeFile;