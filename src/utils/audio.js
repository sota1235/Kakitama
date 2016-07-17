/**
 * @description Simple audio player by using Web Audio API.
 */

import 'babel-polyfill';
import { isNull }        from 'lodash';
import { readFile }      from './fs-promise';
import { toArrayBuffer } from './buffer';

/**
 * @class AudioPlayer
 * @description Util audio player for browser.
 */
export default class AudioPlayer {
  constructor() {
    // get native audio instance
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext;
    this.source = null;
  }

  /**
   * @description Get blob data as a typed array of the music.
   * @param {string} filePath
   * @return {Promise}
   * @private
   */
  async getArrayBuffer(filePath) {
    try {
      const data = await readFile(filePath);
      return await this.decodeAudioData(toArrayBuffer(data));
    } catch (e) {
      return null;
    }
  }

  /**
   * @description Decode audio data from array buffer.
   * @param {ArrayBuffer} buffer
   * @return {Promise}
   */
  async decodeAudioData(buffer) {
    return await this.context.decodeAudioData(buffer);
  }

  /**
   * @description Play the music.
   * @param {string} musicFilePath
   */
  async play(musicFilePath) {
    this.source = this.context.createBufferSource();
    this.source.buffer = await this.getArrayBuffer(musicFilePath);
    this.source.connect(this.context.destination);
    this.source.start(0);
  }

  /**
   * @description Stop the music.
   */
  stop() {
    if (!isNull(this.source)) {
      this.source.stop();
    }
  }

  /**
   * @description Restart the music.
   */
  restart() {
    if (!isNull(this.source)) {
      this.source.start(0);
    }
  }

  /**
   * @description Change the volume of the music.
   * @param {number} range
   */
  volume(range) {
    // TODO
    console.log(range);
  }
}
