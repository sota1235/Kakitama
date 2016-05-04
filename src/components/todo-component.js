/**
 * @description Todo component.
 */

import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui';

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    primaryText={text}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
