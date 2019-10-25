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
        // console.log(filename);
        strip(fullpath, filename);
      }
      // func({ path: fullpath, filename: filename });
    }
  }
}

// const strip_from = 'Search this site\n\
// \n\
// *   ';
// const strip_to = '*   [Sitemap](';

// const strip_from = '//<!\\[CDATA\\[ function JOT';
// const strip_to = '\\]\\]> ';

// const strip_from = 'Comments\n\
// \n\
// [Sign in]';
// const strip_to = ', this);';

const strip_from = "window.jstiming.load.tick('sjl');";
const strip_to = ', this);';

function strip(inpath, filename) {
  let str = fs.readFileSync(inpath) + '';
  const index = str.indexOf(strip_from);
  if (index >= 0) {
    const tindex = str.indexOf(strip_to, index + strip_from.length);
    if (tindex >= 0) {
      str = str.substring(0, index) + str.substring(tindex + strip_to.length);
      fs.writeFileSync(inpath, str);
      console.log(filename);
      fcount++;
    }
  }
}

visit_files_at_path(opath);
console.log('fcount=' + fcount);

// fcount=419
// window.jstiming.load.tick('scl');
