//
// Transfrom facebo.json to:
// posts/README.md -- thumbnail overview of all posts
// posts/2019-08-23-001.md -- full image with text

const fs = require('fs-extra');
const path = require('path');

const config = {
  md_path: '../../jht-facebo-md',
  npost_path: './facebo.json'
};

config.md_path = path.resolve(config.md_path);

run();

async function run() {
  const nposts = fs.readJsonSync(config.npost_path);
  const n = nposts.length;
  // const n = 100;
  let missing = 0;
  for (let index = 0; index < n; index++) {
    const npost = nposts[index];
    const pname = npost.description || npost.text || npost.title;
    const thumb = npost.thumb_path || npost.media_path;
    console.log(index + ' pname=' + pname);
    console.log(index + ' thumb=' + thumb);
    if (!thumb) missing++;
  }
  console.log('nposts.length=' + nposts.length);
  console.log('missing=' + missing);
}
