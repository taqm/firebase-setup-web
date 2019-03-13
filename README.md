[![npm version](https://badge.fury.io/js/firebase-setup-web.svg)](https://badge.fury.io/js/firebase-setup-web)

# firebase-setup-web

## Important
In order to use this module,  
you need to be able to execute "firebase setup:web" in the target project.

## Installation
```bash
npm install --save-dev firebase-setup-web
# or
yarn add -D firebase-setup-web
```

## Usage
```javascript
const config = require('firebase-setup-web');

const defParams = {
    'process.env.FB_PROJECT_ID': JSON.stringify(config.projectId),
}

// webpack config
module.exports = {
    plugins: [
        new webpack.DefinePlugin(defParam),
    ],
};
```

## Interface

```typescript
interface Config {
    apiKey: string;
    databaseURL: string;
    storageBucket: string;
    authDomain: string;
    messagingSenderId: string;
    projectId: string;
}
```

## LICENSE
MIT
