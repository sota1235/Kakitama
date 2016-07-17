/**
 * @description Play status component.
 */

import React, { PropTypes } from 'react';
import { ListItem, Avatar, FontIcon } from 'material-ui';

const PlayStatus = ({ songName }) => (
  <div>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar icon={<FontIcon className="material-icons">headset</FontIcon>} />
      }
      size="20"
    >
      {songName || ''}
    </ListItem>
  </div>
);

PlayStatus.propTypes = {
  songName : PropTypes.string,
};

export default PlayStatus;
