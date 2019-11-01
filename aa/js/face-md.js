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
  root_md: 'README.md',
  n_per_row: 3
};

run();

function run_init() {
  config.md_path = path.resolve(config.md_path);
  config.reg_lastnum = /([\d]+)$/g;
  config.reg_nl = /\n/g;
  config.pagemd_dict = {};
}

function run() {
  run_init();
  const nposts = fs.readJsonSync(config.npost_path);
  const n = nposts.length;
  const mds = [];
  const nps = [];
  let lns = [];
  // const n = 100;
  let missing = 0;
  let from_date = null;
  let to_date = null;
  function flush_lns() {
    mds.push(lns.join(' '));
    mds.push('');
    lns = [];
  }
  for (let index = 0; index < n; index++) {
    const npost = nposts[index];
    let caption = npost.description || npost.text || npost.title;
    if (!caption) caption = 'Post ' + (index + 1);
    const thumb = npost.thumb_path || npost.media_path;
    // console.log(index + ' caption=' + caption);
    // console.log(index + ' thumb=' + thumb);
    const fdate = format_date(npost.date);
    const pagemd = format_pagemd(fdate);
    npost.pagemd = pagemd;
    npost.caption = caption;
    if (thumb) {
      lns.push(`[![](${thumb})](${config.posts_folder}/${pagemd}.md)`);
      // mds.push(caption);
      // mds.push(fdate);
      // write_pagemd(npost, pagemd, caption);
      nps.push(npost);
      if (!to_date) to_date = npost.date;
      from_date = npost.date;
    } else if (npost.url) {
      // No thumb, has url
      flush_lns();
      caption = caption.replace(config.reg_nl, ' ');
      mds.push(`[${caption}](${npost.url})`);
      mds.push(fdate);
      mds.push('');
    } else {
      // mds.push(caption);
      // mds.push(fdate);
      missing++;
    }
    if (lns.length >= config.n_per_row) {
      flush_lns();
    }
  }
  if (lns.length > 0) {
    mds.push(lns.join(' '));
  }
  for (let index = 0; index < nps.length; index++) {
    const npost = nps[index];
    write_pagemd(npost, nps, index);
  }
  from_date = format_date(from_date);
  to_date = format_date(to_date);
  lns = [];
  lns.push('# [John Henry Thompson](../README.md)');
  lns.push('post Facebook.com');
  lns.push('Migrated from https://www.facebook.com/johnhenrythompson');
  lns.push(`${mds.length} Posts from ${from_date} to ${to_date}`);
  lns.push('');
  console.log('nposts.length=' + nposts.length);
  console.log('missing=' + missing);
  const fpath = path.resolve(config.md_path, config.root_md);
  fs.writeFileSync(fpath, lns.join('\n') + mds.join('\n'));
}

function write_pagemd(npost, nps, index) {
  const pagemd = npost.pagemd;
  const caption = npost.caption;
  const fdate = format_date_time(npost.date);
  const mds = [];
  mds.push(`# [John Henry Thompson](../${config.root_md})`);
  mds.push('post Facebook.com');
  let nav = [];
  if (index > 0) {
    const prev = nps[index - 1].pagemd;
    nav.push(`[< Previous](${prev}.md)`);
  }
  if (index < nps.length - 1) {
    const next = nps[index + 1].pagemd;
    nav.push(`[Next >](${next}.md)`);
  }
  mds.push(nav.join(' '));
  mds.push('');
  mds.push(`[![](../${npost.media_path})](../${config.root_md})`);
  mds.push(caption);
  mds.push(fdate);
  const folder = path.resolve(config.md_path, config.posts_folder);
  fs.ensureDirSync(folder);
  const fpath = path.resolve(folder, pagemd + '.md');
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
  return ar1.join('-') + ' ' + ar2.join(':');
}

function format_pagemd(fname) {
  num = config.pagemd_dict[fname];
  if (!num) {
    num = 1;
  } else {
    num++;
  }
  config.pagemd_dict[fname] = num;
  return fname + '-' + num;
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
