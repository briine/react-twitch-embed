import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MEDIA_DEFAULT_HEIGHT, MEDIA_DEFAULT_WIDTH } from '../constants';
import { getClipEmbedURL } from '../utils';

class TwitchClip extends Component {
  componentDidMount() {
    this._validateProps();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this._validateProps();
  }

  _validateProps() {
    if (!this.props.clip) {
      throw new Error('A clip prop must be supplied to TwitchClip!');
    }
  }

  render() {
    const { clip, id, autoplay, muted, height, width, allowFullscreen, ...props } = this.props;

    return (
      <iframe
        title={`Twitch Clip Embed - ${id}`}
        src={getClipEmbedURL(clip, autoplay, muted)}
        id={id}
        height={height}
        width={width}
        allowFullScreen={allowFullscreen}
        {...props}
      />
    );
  }
}

TwitchClip.propTypes = {
  clip: PropTypes.string.isRequired,
  id: PropTypes.string,
  autoplay: PropTypes.bool,
  muted: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  allowFullscreen: PropTypes.bool
};

TwitchClip.defaultProps = {
  id: 'twitch-clip-embed',
  autoplay: true,
  muted: false,
  height: MEDIA_DEFAULT_HEIGHT,
  width: MEDIA_DEFAULT_WIDTH,
  allowFullscreen: true
};

export default TwitchClip;