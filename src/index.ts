import * as path from 'path';
import { promises as fs } from 'fs';
import simpleGit from 'simple-git';
import * as cron from "node-cron";

(async () => {
    //console.log(`${__dirname}`);
    const gitPath = path.resolve(__dirname, '..');
    console.log(gitPath);

    const git = simpleGit(gitPath);
    const newFilePath = `${gitPath}/test.txt`;

    try {
        await fs.appendFile(newFilePath, 'Hello!\n', "utf-8");
        
        await git.add(newFilePath);
        await git.commit("commit");
        await git.push();
        console.log("push finished.")
    }
    catch(err) {
        console.log("Error", err);
    }
})();


// cron.schedule('0 45 23 * * *', async() => {
//     await commit();
// });