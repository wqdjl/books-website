
switch (process.env.NODE_ENV) {
    case 'development':
    case 'dev':
        module.exports = require('./config/webpack.config.dev.js');
        break;
    case 'pro':
    case 'production':
        module.exports = require('./config/webpack.config.pro.js');
        break;
    default:
        module.exports = require('./config/webpack.config.dev.js');
}