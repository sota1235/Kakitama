/**
 * @description Item component of music.
 */

import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui';

const MusicItem = ({ songName, albumName, artistName }) => (
  <TableRow>
    <TableRowColumn>{songName}</TableRowColumn>
    <TableRowColumn>{albumName}</TableRowColumn>
    <TableRowColumn>{artistName}</TableRowColumn>
  </TableRow>
);

MusicItem.propTypes = {
  songName: PropTypes.string,
  albumName: PropTypes.string,
  artistName: PropTypes.string,
};

export default MusicItem;
