/**
 * @description Music item component.
 */

import React, { PropTypes} from 'react';
import { Table, TableRow, TableHeader, TableHeaderColumn, TableBody } from 'material-ui';
import MusicItem from './music-item-component';

const MusicItemList = ({ songs }) => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>曲名</TableHeaderColumn>
        <TableHeaderColumn>アルバム</TableHeaderColumn>
        <TableHeaderColumn>歌手名</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {songs.map(song =>
        <MusicItem
          key={song.id}
          {...song}
        />
      )}
    </TableBody>
  </Table>
);

MusicItemList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    songName: PropTypes.string,
    albumName: PropTypes.string,
    artistName: PropTypes.string,
  }).isRequired).isRequired,
};

export default MusicItemList;
