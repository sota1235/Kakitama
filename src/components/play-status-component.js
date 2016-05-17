/**
 * @description Play status component.
 */

import React from 'react';
import { List, ListItem, Avatar, FontIcon } from 'material-ui';

const PlayStatus = () => (
  <div>
    <ListItem
      disable={true}
      leftAvatar={
        <Avatar icon={<FontIcon className="material-icons">headset</FontIcon>} />
      }
      size="20"
    >
      Song Name
    </ListItem>
  </div>
);

export default PlayStatus;
