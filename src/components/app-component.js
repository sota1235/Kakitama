/**
 * @description Root component.
 */

import React from 'react';
import LeftNavBar from './left-nav-component';
import RightDisplay from './right-display-component';

const App = () => (
  <div>
    <LeftNavBar />
    <RightDisplay />
  </div>
);

export default App;
