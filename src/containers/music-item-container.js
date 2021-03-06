/**
 * @description Container for music item.
 */

import { connect }         from 'react-redux';
import { enableMusicItem } from '../actions/actions';
import MusicItem           from '../components/music-item-component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(enableMusicItem(ownProps.id, ownProps.songName));
  },
});

const MusicItemContainer = connect(mapStateToProps, mapDispatchToProps)(MusicItem);

export default MusicItemContainer;
