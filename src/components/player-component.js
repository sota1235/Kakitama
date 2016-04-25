/**
 * @description Component to play music.
 */
import React from 'react';

export default class PlayerComponent extends React.Component {
  render() {
    return (
      <div className="player-component">
        <div className="music-prev fa fa-backward" aria-hidden="true" />
        <div className="music-main-button fa fa-play-circle" aria-hidden="true" />
        <div className="music-next fa fa-forward" aria-hidden="true" />
      </div>
    );
  }
}
