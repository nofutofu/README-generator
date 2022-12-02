// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
    name: 'installInstructions',
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
    choices: ['MIT', 'APACHE', 'GPLv2'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
