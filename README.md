# WebdriverIO Cucumber Automation Framework

![WebdriverIO logo](/assets/webdriverio.png "WebdriverIO logo") ![Cucumber logo](/assets/cucumber.png "Cucumber logo")

This project is an automation testing framework for a web e-shop, built using WebdriverIO, Cucumber, and JavaScript.
It is based on an existing [Playwright Typescript project](https://github.com/ovcharski/playwright-e2e). The goal is to recreate the same tests using WebdriverIO and BDD (Cucumber).
Another work in progress recreation project is [Playwright with Python](https://github.com/ovcharski/playwright-e2e-python).

## Overview

The framework is designed to automate end-to-end testing of the e-shop, ensuring that all functionalities work as expected. It uses WebdriverIO for browser automation, Cucumber for behavior-driven development (BDD), and JavaScript as the scripting language.

## Features

- **WebdriverIO**: Provides powerful browser automation capabilities.
- **Cucumber**: Enables writing tests in a human-readable format.
- **JavaScript**: Utilized for scripting and test implementation.
- **Allure Reports**: Generates detailed test reports.

## Project Structure

## How to Use

1. **Install Dependencies**: Download and install all required libraries mentioned in the `package.json` file.
    ```sh
    npm install
    ```

2. **Run All Tests**: Execute all tests in the framework.
    ```sh
    npx wdio
    ```

3. **Run Specific Test**: Execute a specific test by specifying the feature file.
    ```sh
    npx wdio --spec register-user.feature
    ```

## Continuous Integration

The project uses GitHub Actions for continuous integration. The workflow is defined in `webdriverio-tests.yml` and includes steps to:

1. Check out the repository.
2. Set up Node.js.
3. Install dependencies.
4. Set up Chrome.
5. Run WebdriverIO tests.
6. Upload Allure results.

## Writing Tests

Tests are written in Cucumber's Gherkin syntax and stored in the `features` directory. Step definitions are implemented in JavaScript and located in `step-definitions`.

## Reporting

Test results are stored in the allure-results directory and can be uploaded as artifacts in the CI pipeline.