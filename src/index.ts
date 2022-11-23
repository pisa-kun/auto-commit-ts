import * as path from 'path';
import { promises as fs } from 'fs';
import simpleGit from 'simple-git';

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
    }
    catch(err) {
        console.log("Error", err);
    }
})();