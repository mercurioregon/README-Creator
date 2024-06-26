// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license)
  return ""
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  // return `![License](${license})`
  }
  // ![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license)
  return ""
  return `[License](${license})`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license)
  return ""
return `## License 
${renderLicenseBadge(license)}
Link: ${renderLicenseLink(license)}
`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


## Project Description

  ${data.description}

## Table of Contents

${data.table}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## How To Contribute

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

  Github: https://github.com/${data.github}
  Email: ${data.email}
`;
}


module.exports = generateMarkdown;
