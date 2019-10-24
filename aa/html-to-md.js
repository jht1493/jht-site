//
const fs = require('fs-extra');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
// const markdown = turndownService.turndown('<h1>Hello world!</h1>');
// console.log(markdown);

const rpath = '../www.johnhenrythompson.com';
const opath = '../jht-md';

let fcount = 0;
visit_files_at_path(rpath);
console.log('fcount=' + fcount);

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
      if (fullpath.endsWith('.html')) {
        console.log(filename);
        convert(fullpath, opath + '/' + filename);
        fcount++;
      }
      // func({ path: fullpath, filename: filename });
    }
  }
}

function convert(inpath, outpath) {
  outpath = path.resolve(outpath);
  const str = fs.readFileSync(inpath) + '';
  const mstr = turndownService.turndown(str);
  pout = path.parse(outpath);
  fs.ensureDirSync(pout.dir);
  fs.writeFileSync(pout.dir + '/' + pout.name + '.md', mstr);
}

// fcount=419
