var TurndownService = require('turndown');

var turndownService = new TurndownService();
var markdown = turndownService.turndown('<h1>Hello world!</h1>');

console.log(markdown);
