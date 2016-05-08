/**
 * @description Container for dropping file action.
 */

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { uploadMusics } from '../actions/actions';

let MusicDropzone = ({ dispatch }) => {
  const onDrop = (files) => {
    dispatch(uploadMusics(files));
  };

  return (
    <Dropzone onDrop={onDrop}>
      <p>Drop music file on this area</p>
    </Dropzone>
  );
};

MusicDropzone = connect()(MusicDropzone);

export default MusicDropzone;
