/**
 * @description Common tool bar component.
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui';

const CommonToolbar = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Main tool bar" />
    </ToolbarGroup>
  </Toolbar>
);

export default CommonToolbar;
