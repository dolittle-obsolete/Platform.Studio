To test this package locally with the @dolittle/cli you need to publish this package to your global node_modules folder.

To do this run the publish-locally script.

Important! Running the script with yarn does not work for some reason. You have to invoke it like this:

```bash
npm run publish-locally
```

Also, if you are using a local version of the dependencies of this package (for example @dolittle/tooling.edge-studio) you need to change the value of that dependency to be the absolute path to that installed package in your local node_modules folder (for my computer this value is: file:/Users/woksin/.nvm/versions/node/v12.4.0/lib/node_modules/@dolittle/tooling.edge-studio)


If the CLI does not pick up this plugin it might be because this package might fail at runtime. To test that simply execute the compiled index.js:

```bash
node Distribution/index.js
```

And fix the runtime errors if any

