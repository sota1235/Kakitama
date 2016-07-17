/**
 * @description Container for play-status-component.
 */

import { connect } from 'react-redux';
import PlayStatus from '../components/play-status-component';

const mapStateToProps = (state) => ({ songName: state.musicItemDisplay.songName });

const PlayStatusContainer = connect(mapStateToProps)(PlayStatus);

export default PlayStatusContainer;
