const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document')
const Text = require('./text')
const Triangle = require('./shape')
const Circle = require("./shape")
const Square = require("./shape")

class CLI{
    constructor(){
        this.title = '';
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
    // .then(() => {
    //     return writeFile(
    //       join(__dirname, '..', 'output', `logo.svg`),
    //     );
    // })
    //.then(() => console.log('Created logo.svg'))
    .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
    });
    }
    buildlogo(){
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'please choose a shape circle, triangle, or square',
                choices: ['circle', 'triangle', 'square']

            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a color or Hexcode of Shape',

            }
        ])
        .then(({shape, color}) =>{
            let chosenshape = shape
            if(shape = 'circle'){
                chosenshape = new Circle();
            }
            else if(shape = 'triangle'){
                chosenshape = new Triangle();
            }
            else{
                chosenshape = new Square();
            }
            console.log(color)
            chosenshape.setcolor(color)
            chosenshape.render()
            console.log(chosenshape)
            return this.buildtext();
        })
        
    }
    buildtext(){
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'please enter in 3 letters for your logo',
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a color or Hexcode of text',
            },
        ])
        .then(({text, color}) =>{
            let writtentext = new Text()
            writtentext.setcolor(color)
            writtentext.render(text)
            console.log(writtentext);
            return this.buildSVG();
        })

    }
    buildSVG() {
        return writeFile(
            join(__dirname, '..', 'output', 'logo.svg'),
            createDocument(chosenshape, writtentext)
          );
    }
}
module.exports = CLI;