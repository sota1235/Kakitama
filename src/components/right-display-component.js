/**
 * @description 右メイン画面
 */

import React from 'react';
import MusicList from '../containers/music-list-container';
import MusicDropzone from '../containers/dropzone-container';

const RightDisplay = () => (
  <div style={{paddingLeft: 256}}>
    <MusicList />
    <MusicDropzone />
  </div>
);

export default RightDisplay;
