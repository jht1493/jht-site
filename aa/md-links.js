//
const fs = require('fs-extra');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
// const markdown = turndownService.turndown('<h1>Hello world!</h1>');
// console.log(markdown);

const opath = '../jht-md';

let fcount = 0;

function exclude(fname) {
  if (fname.substr(0, 1) == '.') return 1;
  if (fname === 'system') return 1;
  return 0;
}

function visit_files_at_path(rpath) {
  init_search();
  var filenames = fs.readdirSync(rpath);
  for (var filename of filenames) {
    if (exclude(filename)) continue;
    var fullpath = rpath + '/' + filename;
    var stat = fs.statSync(fullpath);
    if (stat.isDirectory()) {
      var dir_filenames = fs.readdirSync(fullpath);
      for (var dname of dir_filenames) {
        if (exclude(dname)) continue;
        filenames.push(filename + '/' + dname);
      }
    } else {
      if (fullpath.endsWith('.md')) {
        // console.log(filename);
        strip(fullpath, filename);
      }
      // func({ path: fullpath, filename: filename });
    }
  }
}

// Search for links (*.html) and convert to (*.md)
const match = '\\([^\\(]*?\\.html\\)';
let regx;

function init_search() {
  regx = new RegExp(match, 'g');
}

let subcount = 0;
let repcount = 0;

function strip(inpath, filename) {
  let str = fs.readFileSync(inpath) + '';
  let change = false;
  str = str.replace(regx, sub => {
    // console.log('sub=' + sub);
    subcount++;
    if (!sub.startsWith('(http://')) {
      repcount++;
      sub = sub.substring(0, sub.length - 5) + 'md)';
      change = 1;
    } else {
      console.log('http sub=' + sub);
    }
    return sub;
  });
  if (change) {
    fs.writeFileSync(inpath, str);
    console.log(filename);
    fcount++;
  }
}

visit_files_at_path(opath);
console.log('fcount=' + fcount);
console.log('subcount=' + subcount);
console.log('repcount=' + repcount);
