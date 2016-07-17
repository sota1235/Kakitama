/**
 * @description Common tool bar component.
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui';
import PlayStatus  from '../containers/play-status-container';
import PlayButtons from './play-buttons-component';

const CommonToolbar = () => (
  <Toolbar>
    <PlayButtons />
    <ToolbarGroup>
      <PlayStatus />
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarTitle text="Main tool bar" />
    </ToolbarGroup>
  </Toolbar>
);

export default CommonToolbar;
