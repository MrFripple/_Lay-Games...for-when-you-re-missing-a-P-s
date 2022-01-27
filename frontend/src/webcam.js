import axios from 'axios';
import React, {useEffect, useState, useRef, useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import Webcam from "react-webcam";
import Draggable from 'react-draggable';

const videoConstraints = {
  width: 3,
  height: 3,
  facingMode: "user"
};

export const WebcamCapture = () => {
  const {dragPictureArr, setDragPictureArr} = useContext(AppContext);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();

      let rotateAngle =0;
      const contentStyle = {
        top:30,
        left:30,
        width:30,
        height:30,
        position: 'absolute',
        transform: `rotate(${rotateAngle}deg)`
      }
      console.log(dragPictureArr);
      setDragPictureArr([...dragPictureArr, {'img': imageSrc,
                       'style': contentStyle }])
    },
    [webcamRef, setDragPictureArr, dragPictureArr]
  );

  return (
    <Draggable >

      <div style = {{width: '280px'}}>
      <Webcam
        audio={false}
        height={250}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={230}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      </div>
      </Draggable>
  );
};