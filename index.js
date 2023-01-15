const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your app\'s title?',
    },    
    {
      type: 'input',
      name: 'description',
      message: 'What is your app\'s description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your app\'s installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your app\'s usage information?',
    },
    {
      type: 'list',
      message: 'What is your app\'s license type?',
      name: 'license',
      choices: ['MIT', 'Apache', 'Eclipse', 'Other'],
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are your app\'s contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are your app\'s testing instructions?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your contact email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github account?',
    },
  ])

  .then((data) => {    
  
    var TOCString = 
    "* [Descripton](#description)\n\n" +
    "* [Installation Instructions](#installation-instructions)\n\n" +
    "* [Usage Information](#usage-information)\n\n" +
    "* [App License](#app-license)\n\n" +
    "* [Contribution Guidelines](#contribution-guidelines)\n\n" +
    "* [Testing Instructions](#testing-instructions)\n\n" +
    "* [Questions](#questions)\n\n"
   
    var badge;
    if (data.license == "MIT"){
      badge = "🏛️"
    } else if (data.license == "Apache"){
      badge = "📝"
    } else if (data.license == "Eclipse"){
      badge = "⭐"
    }

    // const filename = data.title + "-README.md";
    const filename = "README.md";
  
    fs.writeFile(filename, 
      '# Project ReadMe - ' + data.title + " " + badge + '\n\n' +
      '## Description \n\n' +
        data.description + '\n\n' + "---" + '\n\n' +
      '## Table of Contents \n\n' +
        TOCString + '\n\n' +  "---" + '\n\n' +
      '## Installation Instructions \n\n' +
        data.installation + '\n\n' + "---" + '\n\n' +
      '## Usage Information \n\n' +
        data.usage + '\n\n' + "---" + '\n\n' +
      '## App License \n\n' +
        'This app is covered under the following license: ' + data.license +'\n\n' + "---" + '\n\n' +
      '## Contribution Guidelines \n\n' +
        data.guidelines + '\n\n' + "---" + '\n\n' +
      '## Testing Instructions \n\n' +
        data.tests + '\n\n' + "---" + '\n\n' +
      '## Questions \n\n' +
        `For more information and questions, please contact me at <${data.email}> or by visiting my [github account](https://github.com/${data.github})`
      ,
    (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
