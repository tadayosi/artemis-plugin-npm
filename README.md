# NPM Package for Artemis Plugin

## Prerequisites

To build and publish the package the following tools need to be installed locally:

- [Node.js](http://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Maven](https://maven.apache.org/)

## Build

Run the following command:

```
yarn build
```

This will download the artifact `org.apache.activemq:artemis-plugin` and unpack the plugin js files into `target/` directory. It will then compile them into `dist/artemis-plugin.<hash>.js`.

## Publish

Once build is successful, make sure to update the `main` field in `package.json` with the output file name under `dist/`, as the content hash changes at each build.

```json
  "main": "dist/artemis-plugin.b3456c33.js",
```

To publish the npm package, run the following command:

```
yarn publish
```

Once successfully published, make sure to push the published tag to the repository:

```
git push origin master --tags
```
