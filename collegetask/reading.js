const fs = require('fs');

// Function to read data from a file
function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File data:', data);
        }
    });
}

// Example usage
const filename = 'read.txt';
readFile(filename);
