/**
 * @description Container for app.
 */

import { connect } from 'react-redux';
import MusicItemList from '../components/music-item-list-component';

const mapStateToProps = (state) => ({ songs: state.musics });

const MusicList = connect(mapStateToProps)(MusicItemList);

export default MusicList;
