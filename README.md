# Sample: React Application (JS)

## About

This project is an example React (JS) application. The main elements of the technology stack are:

- Create React App - the foundation
- React Router Dom - routing
- React Query - data manipulation and caching
- Formik - form processing
- Axios - http client
- Yup - validation
- Tailwind - styling
- Font Awesome - icons
- Testing Library React - tests
- Javascript

> **NOTE:** Since this project serves as an illustration of a React UI, there is no back end, i.e. no APIs. The code is structured as though remote APIs are utilized; however, all data is persisted in browser storage.

### Repository

This repository uses [trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development). The latest code is located on the `main` branch. The `main` branch is always ready for deployment.

Features are developed on branches named `feature/NNNNN` which are created from the `main` branch. The feature name used in the branch is often an issue identifier or a short name, e.g. `feature/PRJ-123` or `feature/fix-unit-tests`.

Releases are created on branches named `release/MM.mm.pp` which are created from the `main` branch. The release name follows the [semantic versioning](https://semver.org/) specification.

Hotfixes are created on branches named `hotfix/MM.mm.pp` which are created from the appropriate `release/MM.mm.pp` branch.

A pull request must be opened requesting merge from any branch back to `main`. GitHub actions perform continuous integration, CI, checks against the PR source branch. At least one code review approval is required to complete the pull request.

See also: [Feature flags](https://www.atlassian.com/continuous-delivery/principles/feature-flags)

## Installation

### Prerequistes

It is strongly recommended that you install Node Version Manager, [`nvm`][nvm]. Node Version Manager simplifies working on multiple projects with different versions of Node.js.

### Clone the Repository

Open the [repository][repo] in a browser. Follow the instructions to clone the repository to your local machine.

### Install Node

Open a terminal window and navigate to the project base directory. Issue the following command to install the version of Node and NPM used by the application:

```bash
# If you already have this version of Node, simply switch to it...
nvm use

# If you do NOT have this version of Node, install it...
nvm install
```

Node Version Manager inspects the `.nvmrc` file in the project base directory and uses or installs the specified version of Node and the Node Package Manager, npm.

### Install the Dependencies

To install the project dependencies, issue the following commands at a terminal prompt in the project base directory:

```bash
# Switch to the project node version...
nvm use

# Install project dependencies
nvm install
```

### After Installation

The installation is now complete! You may open the project in your favorite source code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/)).

We recommend the following VS Code extensions:

- Prettier - Code formatter (required)
- Tailwind CSS IntelliSense (required)
- Indent Rainbow (optional)
- GitLens (optional)

Install the _Prettier_ extension to ensure that all project participants' contributions are formatted using the same rules. The extension leverages project-specific rules found in `prettier.config.js` within the project base directory.

The _Tailwind CSS IntelliSense_ extension is a must-have companion in all projects using Tailwind. The extension ensures that Tailwind CSS classes are named and ordered correctly and flags any conflicting classes.

## Available Scripts

Interact with the application by issuing any of the following commands from the project base directory.

### `npm run build`

Builds the application for production. The distribution files are located in the `./build` directory. The files are optimized for production mode. The build is minified and filenames include hashes.

Linting is performed as part of the build process. Use this command to inspect your changes prior to opening a PR.

### `npm start`

Runs the application in development mode. To view the application, open http://localhost:3000 in a browser. The application is automatically reloaded when changes are made to the source. Lint errors are displayed in the console.

### `npm test`

Executes the test runner in interactive watch mode. At startup, runs only those tests whose targets have changed since the last test run. Use the menu displayed within the console to run additional tests or exit the test runner.

### `npm run test:coverage`

Executes the test runner in `CI` mode and produces a coverage report. With `CI` mode enabled, the test runner executes all tests one time and prints a test summary report to the console. A code coverage report is printed to the console immediately following the test summary.

A detailed test coverage report is created in the `./coverage` directory.

### `npm run jsdoc`

Executes the `jsdoc` documentation generator. Documentation is created in the `./docs` directory.

## Configuration Guide

This section provides information regarding the configuration of this component.

See also: [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables) in Create React App

> **WARNING:** Do not store secrets (e.g. API keys) in the application! Environment variables are embedded into the build and anyone can view the values.

### Configuration Variable Names

Environment variables must be prefixed by `REACT_APP_`. Any other variables, save `NODE_ENV`, will be ignored to avoid accidental exposure within the build.

### `NODE_ENV`

The `NODE_ENV` configuration variable is automatically set by the project scripts. When running `npm start` the value is `'development'`. When running `npm test` the value is `'test'`. When you run `npm run build` the value is set to `'production'`.

### Configuration Validation and Default Values

Access to application configuration is centralized within the `./utils/config` module. A configuration validation schema is defined using the [Yup][yup] library. A sensible default value is defined in the schema, allowing the application to be run without external configuration values supplied.

Configuration variables sourced from the environment or from `.env` files are always have the string data type. Another benefit of Yup validation is that configuration variables are converted to their natural data type during the validation process. For example, the Toast component auto-dismiss time (in milliseconds) is converted from a string to a number, making it easier to consume by application components.

```js
const configSchema = Yup.object({
  NODE_ENV: Yup.string().default('development'),
  REACT_APP_TOAST_AUTODISMISS_MS: Yup.number().min(0).max(30000).default(5000),
});
```

### Adding new Configuration Variables

To add a new configuration variable, define it within the validation schema in `./utils/config`. Make sure you define a sensible default value.

Optionally, add the variable as a key/value pair within your local `.env` file. If you choose not to add it to the `.env` file, the default value will be used at runtime.

### Using Configuration Variables

Application components which rely on configuration values, should consume those values from the `config` module.

```js
import { config } from '../utils/config';

const configValue = config.REACT_APP_CONFIG_VARIABLE;
```

> **WARNING:** Do not consume configuration directly from `process.env.REACT_APP_`. This bypasses the validation and application of default values.

### Configuration Values

| Name                                     | Default     | Description                                                               |
| ---------------------------------------- | ----------- | ------------------------------------------------------------------------- |
| NODE_ENV                                 | development | The runtime environment name. One of 'development', 'test', 'production'. |
| REACT_APP_API_DELAY_MS                   | 2000        | Simulated API call time in milliseconds.                                  |
| REACT_APP_AUTH_SESSION_EXPIRES_IN_MILLIS | 3600000     | The duration of an authenticated user session in milliseconds.            |
| REACT_APP_TOAST_AUTODISMISS_MS           | 5000        | Time a toast is displayed before autodismissal in milliseconds.           |

## Related Information

- [Create React App][cra]
- [React Query][react-query]
- [Axios][axios]
- [Formik][formik]
- [Yup][yup]
- [Tailwind CSS][tailwind]
- [Font Awesome][fa]
- [Testing Library][testing-library]
- [GitHub Actions][ghactions]

[repo]: https://github.com/mwarman/sample-react-stack 'Sample React Stack on GitHub'
[nvm]: https://github.com/nvm-sh/nvm 'Node Version Manager'
[cra]: https://create-react-app.dev/ 'Create React App'
[react-query]: https://tanstack.com/query 'React Query'
[axios]: https://axios-http.com/ 'Axios'
[formik]: https://formik.org/ 'Formik'
[yup]: https://github.com/jquense/yup 'Yup'
[tailwind]: https://tailwindcss.com/ 'Tailwind CSS'
[fa]: https://fontawesome.com/ 'Font Awesome'
[testing-library]: https://testing-library.com/ 'Testing Library'
[ghactions]: https://docs.github.com/en/actions 'GitHub Actions'
