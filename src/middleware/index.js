/**
 * @description Export all middlewares.
 */

import logger            from './logger';
import crashReporter     from './crash-reporter';
import musicParser       from './music-parser';
import musicPlayer       from './music-player';
import dispatchPlayMusic from './dispatch-play-music';

export default [logger, crashReporter, musicParser, musicPlayer, dispatchPlayMusic];
