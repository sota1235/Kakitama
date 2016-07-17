/**
 * @description Left navigation component.
 */

import React                from 'react';
import { Drawer, MenuItem } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const LeftNavBar = () => (
  <Drawer open={true} docked={true}>
    <MenuItem>All</MenuItem>
    <MenuItem>Artist</MenuItem>
    <MenuItem>Album</MenuItem>
    <MenuItem>Label</MenuItem>
  </Drawer>
);

export default LeftNavBar;
