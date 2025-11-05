const fs = require('fs').promises;

fs.readFile('thor.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

fs.appendFile('thor.txt', 'diddy punjab', 'utf8')
.then(() => { console.log("Data Appended Successfully") })
.catch((err) => { console.log("Error Appending data :", err) });

fs.writeFile('thoron.txt', 'kya haal hai bhai', 'utf8')
.then(() => { console.log('File Created Successfully') })
.catch((err1) => { console.log('Error Writing Files :', err1) });
