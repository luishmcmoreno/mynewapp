var copyDefaultConfig = require('@ionic/app-scripts/config/copy.config.js');

copyDefaultConfig.copyFonts.src = ['{{ROOT}}/node_modules/ionic-angular/fonts/**/*', '{{ROOT}}/node_modules/@pluritech/mynewicons/dist/fonts/**/*'];

module.exports = function () {
    return copyDefaultConfig;
  };