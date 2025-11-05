const fs = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('thor.txt', 'Hello, World!', 'utf8');
    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('thoron.txt', JSON.stringify(data, null, 2), 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();
