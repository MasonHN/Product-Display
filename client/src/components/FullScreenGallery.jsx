import React from "react";

const FullScreenGallery = props => {
  if (!props.zoom) {
    return (
      <>
        <div className="fullscreenToolbar">
          <div className="fullscreenSlideCounter">
            {props.slide + 1}/{props.images.length}
          </div>
          <div onClick={props.zoomFunc} className="magnifyingGlass" />
          <div onClick={props.fullscreen} className="exit" />
        </div>
        <div className="fullscreenWrapper" onClick={props.fullscreen}>
          <div className="fullscreen" ref={props.childRef}>
            {props.images.map(element => {
              return (
                <img
                  onClick={props.zoomFunc}
                  className="fullscreenImg"
                  src={element}
                />
              );
            })}
          </div>
          <div
            onClick={props.fullscreenNext}
            className="fullscreenButton--next"
          />
          <div
            onClick={props.fullscreenPrev}
            className="fullscreenButton--prev"
          />
        </div>
      </>
    );
  } else {
    return (
      <div>
        <img
          className="zoomedIn"
          onClick={props.zoomFunc}
          src={props.images[props.slide]}
        />
      </div>
    );
  }
};

export default FullScreenGallery;
