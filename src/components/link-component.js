/**
 * @description Link component.
 */

import React, { PropTypes } from 'react';
import { FlatButton } from 'material-ui';

const Link = ({ active, children, onClick }) => (
  <FlatButton
    label={children}
    secondary={active}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  />
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
