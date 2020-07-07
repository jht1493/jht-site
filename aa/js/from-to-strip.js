//
const fs = require('fs-extra');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
// const markdown = turndownService.turndown('<h1>Hello world!</h1>');
// console.log(markdown);

// const opath = '../../j4u2-md';
const opath = '../../jht-md';

let fcount = 0;

function exclude(fname) {
  if (fname.substr(0, 1) == '.') return 1;
  if (fname === 'system') return 1;
  return 0;
}

function visit_files_at_path(rpath) {
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

const strip_from_to = [
  ['Search this site\n\
\n\
*   ', '*   [Sitemap]('],
  ['//<!\\[CDATA\\[ function JOT', '\\]\\]> '],
  ['Comments\n\
  \n\
  [Sign in]', ', this);'],
  ["window.jstiming.load.tick('sjl');", ', this);'],
  ['[Sign in](https://accounts.google.com', '**'],
  ['', 'Verdana; font-size: 12px; color: black'],
  ['', 'system/app/pages/sitemap/hierarchy.html)'],
  ['Comments\n\
\n\
[Google Sites](http://sites.google.com/site)', '**'],
];

function strip(inpath, filename) {
  let str = fs.readFileSync(inpath) + '';
  let updated = 0;

  for (ent of strip_from_to) {
    const strip_from = ent[0];
    const strip_to = ent[1];
    const index = str.indexOf(strip_from);
    if (index >= 0) {
      const tindex = str.indexOf(strip_to, index + strip_from.length);
      if (tindex >= 0) {
        str = str.substring(0, index) + str.substring(tindex + strip_to.length);
        updated = 1;
      }
    }
  }
  const opt = { str, updated };
  fix_links(opt);
  if (opt.updated) {
    fs.writeFileSync(inpath, opt.str);
    console.log(filename);
    fcount++;
  }
}

// fcount=419
// window.jstiming.load.tick('scl');

// Search for links (*.html) and convert to (*.md)
const match = '\\([^\\(]*?\\.html\\)';
let regx;
let subcount = 0;
let repcount = 0;

function fix_links(opt) {
  if (!regx) {
    regx = new RegExp(match, 'g');
  }
  opt.str = opt.str.replace(regx, sub => {
    // console.log('sub=' + sub);
    subcount++;
    if (!sub.startsWith('(http://')) {
      repcount++;
      sub = sub.substring(0, sub.length - 5) + 'md)';
      opt.updated = 1;
    } else {
      console.log('http sub=' + sub);
    }
    return sub;
  });
}

console.log('Starting...');

visit_files_at_path(opath);

console.log('fcount=' + fcount);
console.log('subcount=' + fcount);
console.log('repcount=' + fcount);
