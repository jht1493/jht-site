//
// Transfrom facebo.json to:
// posts/README.md -- thumbnail overview of all posts
// posts/2019-08-23-001.md -- full image with text

const fs = require('fs-extra');
const path = require('path');

const config = {
  md_path: '../../jht-facebo-md',
  npost_path: './facebo.json',
  posts_folder: 'posts',
  root_md: 'README.md'
};

config.md_path = path.resolve(config.md_path);

run();

function run_init() {
  config.reg_lastnum = /([\d]+)$/g;
}

function run() {
  run_init();
  const nposts = fs.readJsonSync(config.npost_path);
  const n = nposts.length;
  const mds = [];
  mds.push('# John Henry Thompson');
  // const n = 100;
  let missing = 0;
  for (let index = 0; index < n; index++) {
    const npost = nposts[index];
    const caption = npost.description || npost.text || npost.title;
    if (!caption) caption = 'Post ' + (index + 1);
    const thumb = npost.thumb_path || npost.media_path;
    console.log(index + ' caption=' + caption);
    console.log(index + ' thumb=' + thumb);
    const fdate = format_date(npost.date);
    const pagemd = format_pagemd(fdate + '-1');
    if (thumb) {
      mds.push(`[![](${thumb})](${config.posts_folder}/${pagemd})`);
      mds.push(caption);
      mds.push(date);
      write_pagemd(npost, pagemd, caption);
    } else if (npost.url) {
      // No thumb, has url
      mds.push(`[${caption}](${npost.url})`);
      mds.push(fdate);
    } else {
      mds.push(caption);
      mds.push(fdate);
      missing++;
    }
  }
  console.log('nposts.length=' + nposts.length);
  console.log('missing=' + missing);
  const fpath = path.resolve(config.md_path, config.root_md);
  fs.writeFileSync(fpath, mds.join('\n'));
}

function write_pagemd(npost, pagemd, caption) {
  const fdate = format_date_time(npost.date);
  const fpath = path.resolve(config.md_path, config.posts_folder, pagemd);
  const mds = [];
  mds.push(`[![](${npost.media_path})](../${config.root_md})`);
  mds.push(caption);
  mds.push(fdate);
  fs.writeFileSync(fpath, mds.join('\n'));
}

// Return date formated like 2019-08-23
function format_date(date) {
  date = new Date(date);
  const year = date.getFullYear() + '';
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);
  return [year, month, day].join('-');
}

// Return date formated like 2019-08-23 08:20:10
function format_date_time(date) {
  date = new Date(date);
  const year = date.getFullYear() + '';
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);
  const ar1 = [year, month, day];
  const hours = pad(date.getHours(), 2);
  const min = pad(date.getMinutes(), 2);
  const sec = pad(date.getSeconds(), 2);
  const ar2 = [hours, min, sec];
  return ar1.join('-') + ' ' + ar2.joint(':');
}

function format_pagemd(fdate) {
  let fpath = path.resolve(config.md_path, fdate);
  let pts = path.parse(fpath);
  while (fs.pathExistsSync(fpath)) {
    let name = pts.name;
    let num = name.match(config.reg_lastnum);
    if (!num) {
      name = name + '-1';
    } else {
      const lastpos = name.lastIndexOf('-');
      if (lastpos > 0) name = name.substring(0, lastpos);
      num = parseFloat(num[0]) + 1;
      name = name + '-' + num;
      // console.log('fpath=' + fpath);
    }
    fpath = path.resolve(pts.dir, name + pts.ext);
    pts = path.parse(fpath);
  }
  return pts.name;
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
