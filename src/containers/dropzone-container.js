/**
 * @description Container for dropping file action.
 */

import fs from 'fs';
import musicmetadata from 'musicmetadata';
import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { addMusic } from '../actions/actions';

let MusicDropzone = ({ dispatch }) => {
  const onDrop = (files) => {
    console.log('Received files: ', files);
    for (const index in files) {
      let fname = files[index].path;
      musicmetadata(fs.createReadStream(fname), (err, metadata) => {
        console.log(metadata);
      });
    }
  };

  return (
    <Dropzone onDrop={onDrop}>
      <p>Drop music file on this area</p>
    </Dropzone>
  );
};

MusicDropzone = connect()(MusicDropzone);

export default MusicDropzone;
