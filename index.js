const { execSync } = require('child_process');

// eslint-disable-next-line
const firebase = {
  initializeApp: c => c,
};

const CMD = 'firebase setup:web';
const res = execSync(CMD);
const fnc = Buffer.from(res, 'utf-8').toString();
const config = eval(fnc); // eslint-disable-line no-eval

module.exports = config;
