/**
 * @description Common tool bar component.
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui';
import PlayStatus from '../containers/play-status-container';

const CommonToolbar = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <FontIcon className="material-icons">fast_rewind</FontIcon>
      <FontIcon className="material-icons">play_arrow</FontIcon>
      <FontIcon className="material-icons">fast_forward</FontIcon>
    </ToolbarGroup>
    <ToolbarGroup>
      <PlayStatus />
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarTitle text="Main tool bar" />
    </ToolbarGroup>
  </Toolbar>
);

export default CommonToolbar;
