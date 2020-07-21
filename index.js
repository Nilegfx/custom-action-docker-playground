const core = require('@actions/core');
const github = require('@actions/github');
const {argv} = require('yargs');
const { exec } = require("child_process");
const configureKubectl = require('./configureKubectl');

const workspace = process.env.GITHUB_WORKSPACE
// write config file
configureKubectl();

exec("kubectl get pods", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
});


exec(`ls -al ${workspace}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
});
