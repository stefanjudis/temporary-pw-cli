'use strict';

const got = require('got');
const FormData = require('form-data');

async function getTempURL(password) {
  const form = new FormData();
  form.append('text', password);

  const { body } = await got.post('https://file.io/', {
    body: form
  });

  let key;
  try {
    key = JSON.parse(body).key;
  } catch (error) {
    console.log(error);
    throw new Error('Could not create password URL.');
  }

  return `https://temporary.pw/?key=${key}`;
}

module.exports = {
  getTempURL
};
