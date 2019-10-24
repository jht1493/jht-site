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

// Call func on all file at path
function visit_files_at_path(rpath, func) {
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
        console.log(filename);
        strip(fullpath);
        fcount++;
      }
      // func({ path: fullpath, filename: filename });
    }
  }
}

const strip_str = "window.jstiming.load.tick('scl');            ";

function strip(inpath) {
  let str = fs.readFileSync(inpath) + '';
  const index = str.indexOf(strip_str);
  if (index >= 0) {
    str = str.substring(index + strip_str.length);
  }
  fs.writeFileSync(inpath, str);
}

visit_files_at_path(opath);
console.log('fcount=' + fcount);

// fcount=419
// window.jstiming.load.tick('scl');
