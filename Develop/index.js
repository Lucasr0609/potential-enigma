// TODO: Include packages needed for this application
var readMeGenerator = require("./ReadMeGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter your Deployed Application here",
        name: "deployedapplication"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },
    {
        type: "input",
        message: "Please describe the repository.",
        name: "description"

    },
    {
        type: "input",
        message: "Please state if people can contribute to your project.",
        name: "contribute"
    },
    {
        type: "input",
        message: "Please state intruction 1.",
        name: "test"
    },
    {
        type: "input",
        message: "Please state instruction 2.",
        name: "test2"
    },
    {
        type: "input",
        message: "Please state instruction 3.",
        name: "test3",
    },
    {
        type: "input",
        message: "State your accomplishments.",
        name: "accomplish"
    },
    {
        type: "input",
        message: "Please Provide a screenshot of the Index.js file.",
        name: "indexjs"
    },
    {
        type: "input",
        message: "Please Provide a screenshot of the ReadMeGenerator file.",
        name: "readmegenerator"
    },
    {
        type: "input",
        message: "Please Provide a screenshot of the ReadMe file.",
        name: "ReadMe"
    },
    {
        type: "input",
        message: "If you used any source of reference please provide here.",
        name: "reference1"
    },
    {
        type: "input",
        message: "Please state your end-goal.",
        name: "acceptancecriteria"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Successful!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
