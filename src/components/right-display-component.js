/**
 * @description 右メイン画面
 */

import React from 'react';
import MusicList from '../containers/music-list-container';
import MusicDropzone from '../containers/dropzone-container';
import CommonToolbar from './toolbar-component';

const RightDisplay = () => (
  <div style={{ paddingLeft: 256 }}>
    <CommonToolbar />
    <MusicList />
    <MusicDropzone />
  </div>
);

export default RightDisplay;
