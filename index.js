const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a project title.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description.',
  },
  {
    type: 'input',
    name: 'installInst',
    message: 'Enter project installation instructions.',
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'Enter needed information to use this app.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines for the project.',
  },
  {
    type: 'input',
    name: 'testing',
    message: "Enter instructions to run the app's tests",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'APACHE', 'GPLv2'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
  });
}

function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile('./readme-dest/README.md', generateMarkdown(response));
  });
}

init();
