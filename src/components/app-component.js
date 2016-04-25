/**
 * @description Main component.
 */
import React           from 'react';
import PlayerComponent from './player-component';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <p>Hello, Kakitama!</p>
        <PlayerComponent />
      </div>
    );
  }
}
