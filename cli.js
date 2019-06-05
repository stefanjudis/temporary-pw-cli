#!/usr/bin/env node
'use strict';

const clipboardy = require('clipboardy');
const meow = require('meow');
const { getTempURL } = require('.');

const cli = meow(
  `
    Usage
      $ temporary-pw <password>

    Options
      --copy-to-cb, -c  Copy URL to clipboard

    Examples
      $ temporary-pw unicorns
      -> https://temporary.pw/?key=scAjSF

      $ temporary-pw unicorns -c
      (URL is in your clipboard)
`,
  {
    flags: {
      'copy-to-cb': {
        type: 'boolean',
        alias: 'c'
      }
    }
  }
);

if (!cli.input[0]) {
  throw new Error('Please define temporary password');
}

getTempURL(cli.input[0]).then(url => {
  if (cli.flags.copyToCb) {
    clipboardy.writeSync(url);
    console.log('(URL is in your clipboard)');
  } else {
    console.log(url);
  }
});
