var sassDefaultConfig = require('@ionic/app-scripts/config/sass.config.js');

sassDefaultConfig.includePaths.push(
    'node_modules/@pluritech/mynewicons/dist/scss'
);

console.log(sassDefaultConfig.includePaths);

module.exports = function () {
    return sassDefaultConfig;
  };