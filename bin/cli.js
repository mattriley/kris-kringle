const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: 'ap-southeast-2' });
const fs = require('fs');

const { commands } = require('../src');
const { play } = commands({ fs, sns });

const dataFile = process.argv[2];
const data = JSON.parse(fs.readFileSync(dataFile));

play(data);
