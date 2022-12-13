const inquirer = require('inquirer');
const fs = require('fs');
const readmeGenerator = (answers) =>
`
 [![License](https://img.shields.io/badge/license-${answers.license}-green.svg)](https://opensource.org/licenses/${answers.license})

## ${answers.projectName}


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
     }
  ])
  .then((answers) => {
      const createNewReadme = readmeGenerator(answers);

      fs.writeFile('NEWREADME.md', createNewReadme, (err) =>
          err ? console.error(err) : console.log('Your ReadMe file was successfully created!')
      );
  });
