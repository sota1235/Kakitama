/**
 * @description Left navigation component.
 */

import React from 'react';
import { Drawer, MenuItem } from 'material-ui';

const LeftNavBar = () => (
  <Drawer open={true} docked={true}>
    <MenuItem>ほげ</MenuItem>
    <MenuItem>もげ</MenuItem>
  </Drawer>
);

export default LeftNavBar;
