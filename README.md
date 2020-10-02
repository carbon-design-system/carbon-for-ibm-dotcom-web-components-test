# IBM.com Library Web Components Test Application

This is a test application utilizing the IBM.com Library Web Components package. This is a basic webpack setup using
Handlebars for page management.

### Run development

This will deploy a local webpack dev environment with watcher:

```
yarn start
```

### Build Static site for production

This will output to the `dist` folder for deploying up to other environments.

```
yarn build
```

### Upgrading IBM.com Library

There are three tasks, each will upgrade either latest canary, next, or latest versions on NPM:

```
yarn upgrade-canary
yarn upgrade-next
yarn upgrade-latest
```

