import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-youtube'
import 'video.js/dist/video-js.css';

const VideoPlayer = (props) => {
  let videoNode = useRef(null);
  let player = null;

  useEffect(() => {
    // instantiate video.js
    // eslint-disable-next-line
    player = videojs(videoNode, props, function onPlayerReady() {
      console.log('onPlayerReady');
    });

    return () => {
      // destroy player on unmount
      if (player) player.dispose()
    };
  }, [])

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  return (
    <div data-vjs-player>
      <video ref={node => (videoNode = node)} className="video-js" id={props.id} />
    </div>
  );
}

export default VideoPlayer;
