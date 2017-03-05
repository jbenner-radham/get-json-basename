'use strict';

const path = require('path');

module.exports = function (file) {
    return path.basename(file, '.json');
}
