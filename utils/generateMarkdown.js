// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  badge = `https://img.shields.io/badge/License-${license}-blue.svg`
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  link = `https://opensource.org/licenses/${license}`
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None")
  {
    return ""
  }
  else
  {
  renderLicenseBadge(license)
  renderLicenseLink(license)
  }
  return `[![License:${license}](${badge})](${link})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Desriptions
  ${data.descr}
  ##Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Tests](#Test)
  - [Questions](#Questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contri}
  ## Test
  ${data.test}
  ## Questions
  See my Github at [${data.github}](https://github.com/${data.github})
  Or reach my email at ${data.email}
`;
}

module.exports = generateMarkdown;
