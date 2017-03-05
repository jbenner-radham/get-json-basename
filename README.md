get-json-basename
=================
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

Get the [basename](https://en.wikipedia.org/wiki/Basename) of a JSON filepath without the file extension.

Install
-------
You can install this module via the following command.

```sh
$ npm install --save get-json-basename
```

Usage
-----
```js
const getJsonBasename = require('get-json-basename');

getJsonBasename('/path/to/file.json'); // > file
getJsonBasename('/dev/null');          // > null
getJsonBasename('/var/log/test.txt');  // > test.txt
```

Testing
-------
```sh
$ npm test
```

License
-------
This project is licensed under the terms of the [MIT License (Expat)](https://tldrlegal.com/l/mit). You can view the full license [here](LICENSE).

[BUILD BADGE]: https://img.shields.io/travis/jbenner-radham/get-json-basename.svg?style=flat-square
[BUILD PAGE]: https://travis-ci.org/jbenner-radham/get-json-basename
[LICENSE BADGE]:  	https://img.shields.io/github/license/jbenner-radham/get-json-basename.svg?style=flat-square
[LICENSE PAGE]: https://github.com/jbenner-radham/get-json-basename/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/get-json-basename
[NPM VERSION BADGE]: https://img.shields.io/npm/v/get-json-basename.svg?style=flat-square
