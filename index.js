const inquirer = require('inquirer');
const fs = require('fs');
const readmeGenerator = (answers) =>
`
 [![License](https://img.shields.io/badge/license-${answers.license}-green.svg)](https://opensource.org/licenses/${answers.license})

## ${answers.projectName}

## Table of Contents:
   - [Project Description](#project-description)
   - [Installation Instructions](#installation-instructions)
   - [Usage Information](#usage-information)
   - [Contribution Guidelines](#contribution-guidelines)
   - [Test Instructions](#test-instructions)
   - [Contact Me](#contact-me)


## Project Description:
${answers.projectDescription}

## Installation Instructions:
${answers.install}

## Usage Information:
${answers.usageInfo}

## Contribution Guidelines:
${answers.contribute}

## Test Instructions: 
${answers.testing}

## Contact Me
For further quesitons contact me at: ${answers.email} or
[Github](https://github.com/${answers.github})
[Linkedin](${answers.linkedin})


`
inquirer
  .prompt([
    {
      type: 'input', 
      message: 'What is your Project title?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Please enter your project description:',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Please enter installation instruction: ',
      name: 'install',
    },
     {
      type: 'input',
      message: 'Usage information?',
      name: 'usageInfo',
    },
     {
      type: 'input',
      message: 'Contribution guidelines?',
      name: 'contribute',
    },
     {
        type: 'input',
        message: 'test instructions',
        name: 'testing'
     },
     {
        type: 'list',
        message: 'Please select license for this project',
        name: 'license',
        choices: ['Apache', 'MIT', 'Adobe']
     },
     {
        type: 'input',
        message: 'Please insert your e-mail address?',
        name: 'email'
     },
     {
        type: 'input',
        message: 'What is your LinkedIn profile Link?',
        name: 'linkedin'
     },
     {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
     }
  ])
  .then((answers) => {
      const createNewReadme = readmeGenerator(answers);

      fs.writeFile('NEWREADME.md', createNewReadme, (err) =>
          err ? console.error(err) : console.log('Your ReadMe file was successfully created!')
      );
  });
