const fs = require("fs");
let licenseIcon;

// function to generate license icon depending on the user's choice
function generateLicense(data) {
  if (data.license === 'MIT') {
    licenseIcon = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'Apache 2.0') {
    licenseIcon = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'GNU General Public v2.0') {
    licenseIcon = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  return licenseIcon;
}

// function to generate markdown for README
function generateMarkdown(data) {

  generateLicense(data);

return markdownData = (

`# ${data.title}
${licenseIcon}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} License.

## Questions
If you have a question, please reach out! You can contact me via email on ${data.email}.\ 
Or, check out my [GitHub profile](https://github.com/${data.username}).`
)
}

// So that the markdown content can be accessed in the index.js file
module.exports = generateMarkdown;
