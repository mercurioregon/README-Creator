// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: "input",
        name: "title",
        message: "What is the titel of the project?",
    },
    {

        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "table",
        message: "Enter a table of contents.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the steps for installation of the project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter any instructions for use and include examples.",
    },
    {
    
        type: "input",
        name: "license",
        message: "Enter the license.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter instructions on how to contribute to this project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Include any test code.",
    },
    {
       type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "questions",
        message: "Include any remaining questions about the project.",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err )=>{console.log(err)})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        const userMarkdown = generateMarkdown(data)
        writeToFile("README.md", userMarkdown)
    })

}
// Function call to initialize app
init();
