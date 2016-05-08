/**
 * @description Container for app.
 */

import React from 'react';
import { connect } from 'react-redux';
import MusicItemList from '../components/music-item-list-component';

const mapStateToProps = (state, ownProps) => ({ songs: state.musics });

const MusicList = connect(mapStateToProps)(MusicItemList);

export default MusicList;
