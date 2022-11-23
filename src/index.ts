{
    const fs = require("fs");

    fs.appendFile('./test.txt', 'Hello!\n', (err: Error) => {
        if (err) throw err;
        console.log("test.txt に追記");
    })
}