const fs = require('fs');

// Function to append text to a file
function appendToFile(filename, text) {
    fs.appendFile(filename, text, (err) => {
        if (err) {
            // If file does not exist, create a new file and append text
            if (err.code === 'ENOENT') {
                fs.writeFile(filename, text, (err) => {
                    if (err) {
                        console.error('Error creating file:', err);
                    } else {
                        console.log(`File "${filename}" created and text appended.`);
                    }
                });
            } else {
                console.error('Error appending to file:', err);
            }
        } else {
            console.log(`Text appended to "${filename}" successfully.`);
        }
    });
}

// Example usage
const filename = 'example.txt';
const textToAppend = 'This is the text to append.\n';
appendToFile(filename, textToAppend);
