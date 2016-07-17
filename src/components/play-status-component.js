/**
 * @description Play status component.
 */

import React from 'react';
import { ListItem, Avatar, FontIcon } from 'material-ui';

const PlayStatus = ({ songName }) => (
  <div>
    <ListItem
      disable={true}
      leftAvatar={
        <Avatar icon={<FontIcon className="material-icons">headset</FontIcon>} />
      }
      size="20"
    >
      {songName ? songName : ''}
    </ListItem>
  </div>
);

export default PlayStatus;
