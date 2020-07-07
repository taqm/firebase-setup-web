const { execSync } = require('child_process');

function getConfig(appId) {
    if (!appId) throw new Error('Please, set the Firebase appId.')
    
    let CMD = `firebase apps:sdkconfig web ${appId}`;
    const res = execSync(CMD, {
        encoding: "utf-8"
    });
    const result = /firebase\.initializeApp\(((?:.|\n)*)\)/g.exec(res)

    if (!result) throw new Error('Something got wrong while getting the Firebase config: ' + res)

    const str = result[1]
    const config = JSON.parse(str);
    return config
}

module.exports = getConfig;
