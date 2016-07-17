/**
 * @description Parse music file and get meta data of it.
 */

import 'babel-polyfill';
import fs from 'fs';
import musicmetadata from 'musicmetadata';

/**
 * @description Wrapper for musicmetadata.
 * @param {string} fileName
 * @return {Promise}
 */
const getMusicMetaData = fileName =>
  new Promise((resolve, reject) => {
    musicmetadata(fs.createReadStream(fileName), (err, metadata) => {
      if (err) {
        reject(err);
      }
      resolve({
        songName   : metadata.title,
        albumName  : metadata.album,
        artistName : metadata.artist[0],
        filePath   : fileName,
      });
    });
  });

/**
 * @description Parse music file.
 * @param {Array} files
 * @return {Promise}
 */
const parseMusics = async files => {
  const promises = files.map(file => getMusicMetaData(file.path));
  return await Promise.all(promises);
};

export default parseMusics;
