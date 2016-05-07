/**
 * @description Container for app.
 */

import React from 'react';
import { connect } from 'react-redux';
import MusicItemList from '../components/music-item-list-component';

const mapStateToProps = (state, ownProps) => (
  {
    songs: [
      {
        id: 1,
        songName: 'もっと',
        albumName: 'もっと',
        artistName: 'aiko',
      },
      {
        id: 2,
        songName: 'カブトムシ',
        albumName: '桜の木の下',
        artistName: 'aiko',
      },
    ]
  }
);

const MusicList = connect(mapStateToProps)(MusicItemList);

export default MusicList;
