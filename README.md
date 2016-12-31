# find.me Webapp

This project contains the frontend of find.me.
It uses a DAO based database
[API](https://github.com/kswe2016-17/graphql-findme-db-api)
to communicate with the
[backend](https://github.com/kswe2016-17/graphql-findme-graphql-service)
of find.me.

As the communication is being done by a GraphQL service,
it is needed to have a running instance of the corresponding
[service](https://github.com/kswe-2016-17/graphql-findme-graphql-service)
and also to configure the connection which is described later on.

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

## Configuration

As the database API needs to know where to find the GraphQL service,
it is needed to configure the connection.

Copy the `src/conn-settings.js.default` connection config file to
`src/conn-settings.js` and apply your connection data.

**Example:**

```js
var connSettings = {
    url: "http://localhost:8080/graphql",
};

exports.default = connSettings;
module.exports = exports.default;
```

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

## Docker based full application stack

You can run the full application stack
(including database, GraphQL service, web frontend)
by using a prepared environment based on Docker.
This environment build and runs everything is needed to build and run the whole
project with all dependencies and stuff.
For more information and instructions see the readme file of
[find.me Full Stack](https://github.com/kswe-2016-17/graphql-findme-full-stack)
repository.
