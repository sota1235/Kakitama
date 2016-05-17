/**
 * @description Common tool bar component.
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui';

const CommonToolbar = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Main tool bar" />
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <FontIcon className="material-icons">fast_rewind</FontIcon>
      <FontIcon className="material-icons">play_arrow</FontIcon>
      <FontIcon className="material-icons">fast_forward</FontIcon>
    </ToolbarGroup>
  </Toolbar>
);

export default CommonToolbar;
