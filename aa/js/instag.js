//
// Transform faceboook export to facebo.json
//  copy media to jht-facebo-md/media
//  create thumbnails for media
// Example structure of jht-facebo-md/media
// 2019-08-23
//   thaddeus-stevens-equality-IMG_0186.jpg
//   thaddeus-stevens-equality-IMG_0186.jpg-thumb.png

const fs = require('fs-extra');
const path = require('path');
var Jimp = require('jimp');

// "photos": [
//   {
//     "caption": "I am an immigrant!",
//     "taken_at": "2018-11-05T20:19:29",
//     "path": "photos/201811/2b45e454203f6679093fa9141084d5fc.jpg"
//   },

const config = {
  instag_root_path: '/Volumes/GSPOT/jht/DICE-archived/web/johnhenrythompson1493_20191025/',
  out_path: '../../jht-instag-md',
  npost_path: './instag.json',
  thumb_width: 200,
  media_folder: 'media'
};

config.instag_post_path = config.instag_root_path + 'media.json';
config.out_path = path.resolve(config.out_path);

run();

function run_init() {
  config.regex = /[^\w-]/g;
  config.reg_slash = /-+/g;
  config.reg_lastnum = /([\d]+)$/g;
  config.max_fname_len = 64;
  config.image_ext = { '.jpg': 1, '.png': 1 };
}

async function run() {
  run_init();
  const nposts = [];
  const posts = fs.readJsonSync(config.instag_post_path).photos;
  console.log('posts.length=' + posts.length);
  const n = posts.length;
  // const n = 10;
  for (let index = 0; index < n; index++) {
    const npost = to_npost(index, posts[index]);
    if (npost) {
      nposts.push(npost);
      await copy_media(npost);
    }
  }
  fs.writeJSONSync(config.npost_path, nposts, { spaces: 2 });
}

function date_timestamp(date_str) {
  return new Date(date_str);
}
function to_npost(index, post) {
  if (!post.taken_at) {
    console.log(index + ' Skipping post=' + JSON.stringify(post));
    return null;
  }
  const npost = { index };
  npost.date = date_timestamp(post.taken_at);
  // console.log(index + ' npost.date=' + npost.date);
  npost.title = post.caption;
  npost.uri = post.path;
  console.log(index + ' npost=' + JSON.stringify(npost, null, 2));
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

// If fpath already exists, create numbered non-existance name.
// eg. Teddies-2.jpg for Teddies-1.jpg that exists
function new_path(fpath) {
  while (fs.pathExistsSync(fpath)) {
    const pts = path.parse(fpath);
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
  }
  return fpath;
}

// Create a thumbnail for image at src path
async function create_thumb(src, npost, thumb_path, fixed) {
  return new Promise((resolve, reject) => {
    Jimp.read(src)
      .then(image => {
        if (fixed || image.bitmap.width > config.thumb_width) {
          image.resize(config.thumb_width, Jimp.AUTO); // resize the width and scale the height accordingly
          image.writeAsync(thumb_path).then(err => {
            // if (err) {
            //   console.log('image.writeAsync err=' + err);
            // }
            console.log('thumb_path=' + thumb_path);
            npost.thumb_path = thumb_path.substring(config.out_path.length + 1);
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
  const from_path = path.resolve(config.instag_root_path, mpath);
  const ext = path.parse(mpath).ext;
  // create media path based on decription etc.
  // .../jht-instag-md/media/2008-04-02/Teddies-1.jpg
  let fname = npost.description || npost.text || npost.title;
  if (npost.description && npost.title) fname = npost.title + '-' + npost.description;
  if (!fname) fname = 'media ' + npost.index;
  fname = fname.replace(config.regex, '-').replace(config.reg_slash, '-');
  fname = fname.substring(0, config.max_fname_len);
  if (fname.endsWith('-')) fname = fname.substring(0, fname.length - 1);
  fname += ext;
  // Put media in dated folder, eg: 2008-04-02
  const date = npost.date;
  const year = date.getFullYear() + '';
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);
  let folder = [year, month, day].join('-');
  folder = path.resolve(config.out_path, config.media_folder, folder);
  if (!fs.pathExistsSync(folder)) {
    fs.ensureDirSync(folder);
  }
  const to_path = new_path(path.resolve(folder, fname));
  fs.copyFileSync(from_path, to_path);
  const ttime = npost.creation_date || npost.date;
  fs.utimesSync(to_path, ttime, ttime);
  console.log(npost.index + ' to_path=' + to_path);

  npost.media_path = to_path.substring(config.out_path.length + 1);

  if (config.image_ext[ext]) {
    const pt = path.parse(to_path);
    const thumb_path = path.resolve(pt.dir, pt.name + '-thumb' + pt.ext);
    await create_thumb(to_path, npost, thumb_path);
  } else if (npost.thumb_uri) {
    // Use thumb_uri for thumbnail if provided
    const from_thumbpath = path.resolve(config.instag_root_path, npost.thumb_uri);
    console.log('from_thumbpath=' + from_thumbpath);
    const pt1 = path.parse(to_path);
    const pt2 = path.parse(from_thumbpath);
    const thumb_path = path.resolve(pt1.dir, pt1.name + '-thumb' + pt2.ext);
    await create_thumb(from_thumbpath, npost, thumb_path, 1);
  }
}
