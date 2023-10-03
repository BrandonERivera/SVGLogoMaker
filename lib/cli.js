const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document')

class CLI{
    constructor(){
        this.title = '';
        this.logo = []

    }
    run(){
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name',

        },
    ])
    .then(({name}) => {
        this.title = `${name}'s Logo`
        return this.buildlogo();

    })
    .then(() => {
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          createDocument(this.title, this.logo)
        );
    })
    .then(() => console.log('Created logo.svg'))
    .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
    });
    }
    buildlogo(){
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: "Enter 3 letters or less for your logo's text",

            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a color or Hexcode',

            },
            {
                type: 'list',
                name: 'shape',
                message: 'please choose a shape circle, triangle, or square',
                choices: ['circle', 'triangle', 'square']

            }
        ])
        .then(({text, color, shape}) =>{
            this.logo.push({text, color, shape})
        })
    }
}
module.exports = CLI;