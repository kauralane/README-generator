const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  
return markdownData = (
`# ${data.title}

## Description
${data.description}

## Table of Contents

[Description](#description)
[Table of Contents](#table-of-contents)
[Installation](#installation)
[Usage](#usage)
[Contributors](#contributors)
[Tests](#tests)
[License](#license)
[Questions](#questions)

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
If you have a question, please reach out! You can contact me via ${data.email}. Or, check out my GitHub profile: github.com/${data.username}.`
)
}

module.exports = generateMarkdown;
