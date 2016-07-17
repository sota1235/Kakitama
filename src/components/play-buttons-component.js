/**
 * @description Buttons for controlling music.
 */

import React from 'react';
import { ToolbarGroup, FontIcon } from 'material-ui';

/**
 * TODO: use this component without ToolbarGroup
 */
const PlayButtons = ({ onClickPrev, onClickPlay, onClickNext }) => (
  <ToolbarGroup firstChild={true}>
    <FontIcon className="material-icons" onClick={onClickPrev}>fast_rewind</FontIcon>
    <FontIcon className="material-icons" onClick={onClickPlay}>play_arrow</FontIcon>
    <FontIcon className="material-icons" onClick={onClickNext}>fast_forward</FontIcon>
  </ToolbarGroup>
);

export default PlayButtons;
