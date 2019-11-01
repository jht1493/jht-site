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
var Jimp = require('jimp');

const fb_root_path =
  '/Volumes/GSPOT/jht/DICE-archived/web/facebook-johnhenrythompson-2019-10-25/';
const fb_post_path = fb_root_path + 'posts/your_posts_1.json';
let out_path = '../../jht-facebo-md';
const npost_path = './facebo.json';
const regex = /[^\w-]/g;
const reg_slash = /-+/g;
const max_fname_len = 64;
const reg_lastnum = /([\d]+)$/g;
const image_ext = { '.jpg': 1, '.png': 1 };
const thumb_width = 200;
const media_folder = 'media';

out_path = path.resolve(out_path);

run();

async function run() {
  const nposts = [];
  const posts = fs.readJsonSync(fb_post_path);
  console.log('posts.length=' + posts.length);
  const n = posts.length;
  // const n = 100;
  for (let index = 0; index < n; index++) {
    const npost = to_npost(index, posts[index]);
    if (npost) {
      nposts.push(npost);
      await copy_media(npost);
    }
  }
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
  }
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

async function create_thumb(src, npost, thumb_path, minwidth, fixed) {
  return new Promise((resolve, reject) => {
    Jimp.read(src)
      .then(image => {
        // Do stuff with the image.
        // console.log('image.bitmap.width=' + image.bitmap.width);
        // console.log('image.bitmap.height=' + image.bitmap.height);
        if (fixed || image.bitmap.width > minwidth) {
          image.resize(minwidth, Jimp.AUTO); // resize the width   and scale the height accordingly
          image.writeAsync(thumb_path).then(err => {
            console.log('thumb_path=' + thumb_path);
            npost.thumb_path = thumb_path.substring(out_path.length + 1);
            resolve(image);
          });
        } else {
          resolve(image);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function copy_media(npost) {
  let mpath = npost.uri;
  if (!mpath) return;
  const from_path = path.resolve(fb_root_path, mpath);
  const ext = path.parse(mpath).ext;
  // create media path based on decription etc.
  // .../jht-facebo-md/media/2008-04-02/Teddies-1.jpg
  let fname = npost.description || npost.text || npost.title;
  if (npost.description && npost.title)
    fname = npost.title + '-' + npost.description;
  if (!fname) fname = 'media ' + npost.index;
  fname = fname.replace(regex, '-').replace(reg_slash, '-');
  fname = fname.substring(0, max_fname_len);
  if (fname.endsWith('-')) fname = fname.substring(0, fname.length - 1);
  fname += ext;
  // Put media in dated folder, eg: 2008-04-02
  const date = (npost.media && npost.media.creation_date) || npost.date;
  const year = date.getFullYear() + '';
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);
  let folder = [year, month, day].join('-');
  folder = path.resolve(out_path, media_folder, folder);
  if (!fs.pathExistsSync(folder)) {
    fs.ensureDirSync(folder);
  }
  const to_path = new_path(path.resolve(folder, fname));
  fs.copyFileSync(from_path, to_path);
  const ttime = npost.creation_date || npost.date;
  fs.utimesSync(to_path, ttime, ttime);
  console.log(npost.index + ' to_path=' + to_path);

  npost.media_path = to_path.substring(out_path.length + 1);

  if (image_ext[ext]) {
    const pt = path.parse(to_path);
    const thumb_path = path.resolve(pt.dir, pt.name + '-thumb' + pt.ext);
    await create_thumb(to_path, npost, thumb_path, thumb_width);
  } else if (npost.thumb_uri) {
    const from_thumbpath = path.resolve(fb_root_path, npost.thumb_uri);
    console.log('from_thumbpath=' + from_thumbpath);
    const pt1 = path.parse(to_path);
    const pt2 = path.parse(from_thumbpath);
    const thumb_path = path.resolve(pt1.dir, pt1.name + '-thumb' + pt2.ext);
    await create_thumb(from_thumbpath, npost, thumb_path, thumb_width, 1);
  }
}
