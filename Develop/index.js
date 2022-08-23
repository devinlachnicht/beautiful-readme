// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Are there any steps(dependencies) needed to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is your project used for?",
        name: "usage"
    },
    {
        type: "input",
        message: "List all contributors/collaborators to your project:",
        name: "contributors"
    },
    {
        type: "list",
        message: "Does your project use any licenses?",
        choices: ["MIT", "Apache 2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email:",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
