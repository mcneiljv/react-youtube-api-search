import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="sixteen wide column">
        <div class="ui active inverted dimmer page-loader">
          <div class="ui medium text loader">Loading...</div>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="eleven wide column">
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} allowFullScreen />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
