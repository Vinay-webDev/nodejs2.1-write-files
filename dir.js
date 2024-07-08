// how to make directory and how to delete directory in node*****

const fs = require('fs');
/*
fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log("Directory created!");
}); */

// to check to see if there a directory that already exists using existsSync() method
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log("Directory created!");
    })
};

// to delete the existing directory 
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log("Directory removed!");
    })
};





















