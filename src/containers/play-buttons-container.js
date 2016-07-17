/**
 * @description Container for play-buttons-component.
 */

import { connect } from 'react-redux';
import PlayButtons from '../components/play-buttons-component';
import { prevMusic, playMusic, nextMusic } from '../actions/actions';

const mapStateToProps = (state) => ({ songName: state.musicItemDisplay.songName });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickPrev() {
    dispatch(prevMusic());
  },
  onClickPlay() {
    dispatch(playMusic());
  },
  onClickNext() {
    dispatch(nextMusic());
  },
});

const PlayStatusContainer = connect(mapStateToProps, mapDispatchToProps)(PlayButtons);

export default PlayStatusContainer;
