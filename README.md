# firebase-setup-web

## Install
```bash
npm install --save-dev firebase-setup-web
# or
yarn add -D firebase-setup-web
```

## Usage
```javascript
const config = require('firebase-setup-web');

// webpack config
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.FB_PROJECT_ID': config.projectId,
        }),
    ],
};
```
