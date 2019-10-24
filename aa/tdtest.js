//
const fs = require('fs-extra');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
// const markdown = turndownService.turndown('<h1>Hello world!</h1>');
// console.log(markdown);

const fpath = '../www.johnhenrythompson.com/index.html';
// const fpath = '../www.johnhenrythompson.com/yoga/patanjani/book-1/11.html';

const str = fs.readFileSync(fpath) + '';
const mstr = turndownService.turndown(str);

console.log(mstr);
