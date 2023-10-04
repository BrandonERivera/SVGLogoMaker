// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a Description of your project!',
    },
    {
        type: 'input',
        name: 'install',
        message: 'what is the install for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what is the licensening for your project',
        choices: ['None','MIT', 'Apache_2.0', 'BSD_3--Clause','EPL_1.0' ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who else contributed to the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how would you test your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
])
.then((response) =>{
    const data = {
        title: response.name,
        descr: response.description,
        install: response.install,
        usage: response.usage,
        license: response.license,
        contri: response.contribution,
        test: response.test,
        github: response.github,
        email: response.email
    }
    //writeToFile(data.title, generateMarkdown(data))
    writeToFile("README.md", generateMarkdown(data))
})
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md File!")
  );
    
}

// TODO: Create a function to initialize app
function init() {
    questions;
}

// Function call to initialize app
init();
