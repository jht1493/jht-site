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
  pages_folder: 'pages',
  root_md: 'README.md',
  n_per_row: 4,
  n_per_page: 32
};

run();

function run_init() {
  config.md_path = path.resolve(config.md_path);
  config.reg_lastnum = /([\d]+)$/g;
  config.reg_nl = /\n/g;
  config.pagemd_dict = {};
  config.page_pagemd_dict = {};

  config.pofolder = path.resolve(config.md_path, config.posts_folder);
  fs.ensureDirSync(config.pofolder);

  config.pafolder = path.resolve(config.md_path, config.pages_folder);
  fs.ensureDirSync(config.pafolder);
}

function run() {
  run_init();
  const nposts = fs.readJsonSync(config.npost_path);
  const nposts_n = nposts.length;
  // const nposts_n = 100;
  let mds = [];
  const thumb_posts = [];
  let lns = [];
  let missing = 0;
  let from_date = null;
  let to_date = null;
  const pages_mds = [];
  const pages_mds_date = [];
  let per_page_count = 0;
  function flush_lns() {
    mds.push(lns.join(' '));
    mds.push('');
    lns = [];
  }
  let fdate;
  let path_prefix = '';
  for (let index = 0; index < nposts_n; index++) {
    const npost = nposts[index];
    let caption = npost.description || npost.text || npost.title;
    if (!caption) caption = 'Post ' + (index + 1);
    const thumb = npost.thumb_path || npost.media_path;
    // console.log(index + ' caption=' + caption);
    // console.log(index + ' thumb=' + thumb);
    fdate = format_date(npost.date);
    const pagemd = format_pagemd(fdate);
    npost.pagemd = pagemd;
    npost.caption = caption;
    if (thumb) {
      lns.push(
        `[![](${path_prefix + thumb})](${path_prefix +
          config.posts_folder}/${pagemd}.md)`
      );
      // mds.push(caption);
      // mds.push(fdate);
      // write_pagemd(npost, pagemd, caption);
      thumb_posts.push(npost);
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
    per_page_count++;
    if (per_page_count > config.n_per_page) {
      pages_mds.push(mds);
      pages_mds_date.push(fdate);
      mds = [];
      per_page_count = 0;
      path_prefix = '../';
    }
  }
  if (lns.length > 0) {
    mds.push(lns.join(' '));
  }
  if (mds.length > 0) {
    pages_mds.push(mds);
    pages_mds_date.push(fdate);
  }
  write_thumb_posts(thumb_posts);
  write_pages_mds(pages_mds, pages_mds_date, from_date, to_date, nposts_n);

  console.log('nposts.length=' + nposts.length);
  console.log('missing=' + missing);
}

function write_pages_mds(
  pages_mds,
  pages_mds_date,
  from_date,
  to_date,
  nposts_n
) {
  make_pages_links(pages_mds_date);
  let footer_link;
  for (let index = 1; index < pages_mds.length; index++) {
    const link = write_pages_mds_index(pages_mds, index);
    if (!footer_link) footer_link = link;
  }
  from_date = format_date(from_date);
  to_date = format_date(to_date);
  const mds = pages_mds[0];
  const lns = [];
  lns.push('# [John Henry Thompson](../README.md)');
  lns.push('post Facebook.com');
  lns.push('');
  lns.push('Migrated from https://www.facebook.com/johnhenrythompson');
  lns.push('');
  lns.push(`${nposts_n} Posts from ${from_date} to ${to_date}`);
  lns.push('');
  const footer = `[[ Next > ]](${config.pages_folder}/${footer_link})`;
  const fpath = path.resolve(config.md_path, config.root_md);
  fs.writeFileSync(fpath, lns.join('\n') + mds.join('\n') + '\n' + footer);
}

function make_pages_links(pages_mds_date) {
  config.pages_links = ['../' + config.root_md];
  for (let index = 1; index < pages_mds_date.length; index++) {
    const fname = format_page_pagemd(pages_mds_date[index]);
    const link = `${fname}.md`;
    config.pages_links.push(link);
  }
}

function write_pages_mds_index(pages_mds, index) {
  let prev_link;
  if (index > 0) prev_link = config.pages_links[index - 1];
  let next_link;
  if (index < pages_mds.length - 1) next_link = config.pages_links[index + 1];
  const mds = pages_mds[index];
  const lns = [];
  lns.push('# [John Henry Thompson](../README.md)');
  lns.push('');
  if (prev_link) lns.push(`[[ < Previous ]](${prev_link})`);
  lns.push('');
  lns.push('');
  mds.push('');
  let footer = '';
  if (next_link) footer = `[[ Next > ]](${next_link})`;
  const link = config.pages_links[index];
  const fpath = path.resolve(config.pafolder, link);
  fs.writeFileSync(fpath, lns.join('\n') + mds.join('\n') + footer);
  return link;
}

function write_thumb_posts(thumb_posts) {
  for (let index = 0; index < thumb_posts.length; index++) {
    const npost = thumb_posts[index];
    write_pagemd(npost, thumb_posts, index);
  }
}

function write_pagemd(npost, thumb_posts, index) {
  const pagemd = npost.pagemd;
  const caption = npost.caption;
  const fdate = format_date_time(npost.date);
  const mds = [];
  mds.push(`# [John Henry Thompson](../${config.root_md})`);
  mds.push('post Facebook.com');
  mds.push('');
  let nav = [];
  if (index > 0) {
    const prev = thumb_posts[index - 1].pagemd;
    nav.push(`[[ < Previous ]](${prev}.md)`);
  }
  if (index < thumb_posts.length - 1) {
    const next = thumb_posts[index + 1].pagemd;
    nav.push(`[[ Next > ]](${next}.md)`);
  }
  mds.push(nav.join(' '));
  mds.push('');
  mds.push(`[![](../${npost.media_path})](../${config.root_md})`);
  mds.push('');
  mds.push(caption);
  mds.push('');
  mds.push(fdate);
  mds.push('');
  mds.push(nav.join(' '));
  // const folder = path.resolve(config.md_path, config.posts_folder);
  // fs.ensureDirSync(folder);
  const fpath = path.resolve(config.pofolder, pagemd + '.md');
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

function format_page_pagemd(fname) {
  num = config.page_pagemd_dict[fname];
  if (!num) {
    num = 1;
  } else {
    num++;
  }
  config.page_pagemd_dict[fname] = num;
  return fname + '-' + num;
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
