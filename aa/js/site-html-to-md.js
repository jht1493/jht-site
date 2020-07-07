//
const fs = require('fs-extra');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
// const markdown = turndownService.turndown('<h1>Hello world!</h1>');
// console.log(markdown);

const site = 'jht';
// const site = 'j4u2';

const sites = {
  jht: {
    rpath: '../johnhenrythompson_com',
    opath: '../../jht-md',
    hext: '.html',
  },
  j4u2: {
    rpath: '../j4u2_com',
    opath: '../j4u2-md',
    hext: '.htm',
  },
};
const { rpath, opath, hext } = sites[site];

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
      console.log('fullpath=' + fullpath);
      if (fullpath.endsWith(hext)) {
        console.log(filename);
        convert(fullpath, opath + '/' + filename);
        fcount++;
      }
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

visit_files_at_path(rpath);
console.log('fcount=' + fcount);

// fcount=388
