// how to make directory and how to delete directory in node*****

const fs = require('fs');

fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log("Directory created!");
});

























