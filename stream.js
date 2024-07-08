// when we have huge data files
const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newlorem.txt'));

// now we'll listen for data!!!
/*
rs.on('data', (dataChunck) => {
    ws.write(dataChunck);
});*/
//alternate method which is too easy***
rs.pipe(ws);



















