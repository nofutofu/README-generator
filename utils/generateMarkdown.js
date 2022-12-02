// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
## Description
 ${data.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [How to contribute](#how-to-contribute)
5. [Tests](#tests)
6. [Contact Me](#author)
## Installation
${data.installInst}
## Usage
${data.usageInfo}
## License
${data.license}
## How to contribute
${data.contribution}
## Tests
${data.testing}
## Author
### ${data.github}
- [Profile](https://github.com/${data.github})
- [Email](mailto:${data.email}?subject=Hi "Hi!")
`;
}

module.exports = generateMarkdown;
