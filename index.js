const { execSync } = require('child_process');

// eslint-disable-next-line
const firebase = {
  initializeApp: c => c,
};

const TOKEN = process.env.FB_CI_TOKEN;

let CMD = 'firebase setup:web';
if (TOKEN) {
  CMD += ` --token ${TOKEN}`;
}

const res = execSync(CMD);
const fnc = Buffer.from(res, 'utf-8').toString();
const config = eval(fnc); // eslint-disable-line no-eval

module.exports = config;
