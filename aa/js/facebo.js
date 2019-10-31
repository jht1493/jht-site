//
// jht-facebo-md
// media
// 2019-08-23
//   thaddeus-stevens-equality-IMG_0186.jpg
//   thaddeus-stevens-equality-IMG_0186.jpg-thumb.png
// posts
// README.md -- thumbs 3xn
// 2019-08-23-001.md -- full image with text

const fs = require('fs-extra');
const path = require('path');

const fb_root_path =
  '/Volumes/GSPOT/jht/DICE-archived/web/facebook-johnhenrythompson-2019-10-25/';
const fb_post_path = fb_root_path + 'posts/your_posts_1.json';
const out_path = '../../jht-facebo-md';
const npost_path = './facebo.json';
const regex = /[^\w-]/g;
const reg_slash = /-+/g;
const max_fname_len = 64;
const reg_lastnum = /([\d]+)$/g;

run();

function run() {
  const nposts = [];
  const posts = fs.readJsonSync(fb_post_path);
  console.log('posts.length=' + posts.length);

  for (let index = 0; index < posts.length; index++) {
    const npost = to_npost(index, posts[index]);
    if (npost) {
      nposts.push(npost);
      copy_media(npost);
    }
  }
  const media_path = path.resolve(out_path, 'media');
  fs.writeJSONSync(npost_path, nposts, { spaces: 2 });
  // fs.ensureDirSync(out_path);
}

function date_timestamp(timestamp) {
  return new Date(timestamp * 1000);
}
function to_npost(index, post) {
  if (!post.timestamp) {
    console.log(index + ' Skipping post=' + JSON.stringify(post));
    return null;
  }
  const npost = { index };
  npost.date = date_timestamp(post.timestamp);
  // console.log(index + ' npost.date=' + npost.date);
  if (post.data && post.data.length > 0 && post.data[0].post) {
    npost.text = post.data[0].post;
    // console.log(index + ' npost.text=' + npost.text);
  }
  // else {
  //   console.log(index + ' post=' + JSON.stringify(post, null, 2));
  // }
  if (post.attachments && post.attachments.length > 0) {
    const datas = post.attachments[0].data;
    if (datas && datas.length > 0) {
      for (const data of datas) {
        const media = data.media;
        if (media) {
          if (media.title) npost.title = media.title;
          if (media.uri) npost.uri = media.uri;
          if (media.creation_timestamp)
            npost.creation_date = date_timestamp(media.creation_timestamp);
          if (media.description) npost.description = media.description;
          if (media.thumbnail && media.thumbnail.uri)
            npost.thumb_uri = media.thumbnail.uri;
        }
        const external_context = data.external_context;
        if (external_context) {
          if (external_context.name && !npost.title)
            npost.title = external_context.name;
          if (external_context.url) npost.url = external_context.url;
        }
        if (data.text) {
          if (!npost.text) npost.text = '';
          npost.text += data.text + ' ';
        }
      }
    }
  }
  // console.log(index + ' npost=' + JSON.stringify(npost, null, 2));
  return npost;
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
// path.parse('/home/user/dir/file.txt');
//       root : "/",
//       dir : "/home/user/dir",
//       base : "file.txt",
//       ext : ".txt",
//       name : "file"

function new_path(fpath) {
  while (fs.pathExistsSync(fpath)) {
    const fparts = path.parse(fpath);
    let name = fparts.name;
    let num = name.match(reg_lastnum);
    if (!num) {
      name = name + '-1';
    } else {
      const lastpos = name.lastIndexOf('-');
      if (lastpos > 0) {
        name = name.substring(0, lastpos);
      }
      num = parseFloat(num[0]) + 1;
      name = name + '-' + num;
      // console.log('fpath=' + fpath);
    }
    fpath = path.resolve(fparts.dir, name + fparts.ext);
  }
  return fpath;
}

function copy_media(npost) {
  const mpath = npost.uri;
  if (!mpath) return;
  const frompath = path.resolve(fb_root_path, mpath);
  const ext = path.parse(mpath).ext;

  let fname = npost.description || npost.text || npost.title;
  if (npost.description && npost.title)
    fname = npost.title + '-' + npost.description;
  if (!fname) fname = 'media ' + npost.index;
  fname = fname.replace(regex, '-').replace(reg_slash, '-');
  fname = fname.substring(0, max_fname_len);
  if (fname.endsWith('-')) fname = fname.substring(0, fname.length - 1);
  fname += ext;

  // console.log(npost.index + ' fname=' + fname);
  const date = (npost.media && npost.media.creation_date) || npost.date;
  const year = date.getFullYear() + '';
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);
  const folder = [year, month, day].join('-');
  const media_folder = path.resolve(out_path, 'media', folder);
  if (!fs.pathExistsSync(media_folder)) {
    fs.ensureDirSync(media_folder);
  }
  const to_path = new_path(path.resolve(media_folder, fname));
  fs.copyFileSync(frompath, to_path);

  const ttime = npost.creation_date || npost.date;
  fs.utimesSync(to_path, ttime, ttime);

  console.log(npost.index + ' to_path=' + to_path);
}
