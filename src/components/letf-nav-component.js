/**
 * @description Left navigation component.
 */

import React from 'react';
import { Drawer, MenuItem } from 'material-ui';

const LeftNavBar = () => (
  <Drawer open={true} docked={true}>
    <MenuItem>All</MenuItem>
    <MenuItem>Artist</MenuItem>
    <MenuItem>Album</MenuItem>
    <MenuItem>Label</MenuItem>
  </Drawer>
);

export default LeftNavBar;
