/**
 * @description Wrapper functions for 'fs' module using Promise.
 */

import fs from 'fs';

/**
 * @description Wrapper for fs.readFile
 * @param {string} filePath
 * @param {Object} options
 * @return {Promise}
 */
export function readFile(filePath, options = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

/**
 * @description Wrapper for fs.stat
 * @param {string} filePath
 * @return {Promise}
 */
export function stat(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats);
    });
  });
}
