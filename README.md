# FindMe Webapp

This project contains the frontend of FindMe.
It uses a DAO based database
[API](https://github.com/kswe2016-17/graphql-findme-db-api)
to communicate with the
[backend](https://github.com/kswe2016-17/graphql-findme-graphql-service)
of FindMe.

## Prerequisites

- [nodejs v6.0+](https://nodejs.org)
- [npm v3.0+](https://nodejs.org)

## Available npm scripts

| Script  | Description                                                                                                    |
|:--------|:---------------------------------------------------------------------------------------------------------------|
| `build` | Builds a distribution.                                                                                         |
| `serve` | Starts a development variant of the project with file watching and online hot-replacement on HTTP port `8081`. |
| `lint`  | Runs `eslint` and checkes the source code quality.                                                             |
| `test`  | Runs unit tests with `karma`.                                                                                  |
| `clean` | Cleans up the project directory.                                                                               |

## Start project in development mode

Start the development server as follows:

```bash
npm run serve
```

This runs the development server in watch mode with online hot replacing on
HTTP port `8081`.
This way the development server builds and updates the running instance on
each file change automatically,
so there is no need to restart the development server after making some changes.

## Build and run project

Build the project as follows:

```bash
npm run build
```

Then open `dist/index.html` file in a web browser and do whatever you want.
