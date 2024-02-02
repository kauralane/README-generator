const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    message: 'Project Title:',
    name: 'title'
},
{
    type: 'input',
    message: 'Description:',
    name: 'description'
}, 
{
    type: 'input',
    message: 'Installation:',
    name: 'installation'
},
{
    type: 'input',
    message: 'Usage:',
    name: 'usage'
},
{
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GNU General Public v2.0']
},
{
    type: 'input',
    message: 'Contributing:',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Tests:',
    name: 'tests'
},
{
    type: 'input',
    message: 'Github username:',
    name: 'username'
},
{
    type: 'input',
    message: 'Email address:',
    name: 'email'
}
];

// function to write README file
function writeToFile(data) {

// Generates the markdown content
    generateMarkdown(data);

// Creates the README.md file in the output folder, and puts the markdown content in it. Also includes ternary operator to catch error, or tell user the operation was successful.
    fs.writeFile(`./output/README.md`, markdownData, (err) => err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => writeToFile(data));
}

// function call to initialize program
init(); 