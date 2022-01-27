import axios from 'axios';
import React, {useEffect, useState, useRef, useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import Webcam from "react-webcam";
import Draggable from 'react-draggable';



export const UserUploaded = () => {
  const {dragPictureArr, setDragPictureArr, gameSelected, setGameSelected} = useContext(AppContext);
  console.log('making draggable picture');

  return (
    <div>
    <div>COOL STUFF PEOPLE HAVE UPLOADED for {gameSelected}!!</div>
    <div>Checkers Board uploaded by: MrFripple</div>
    <img className = 'thumbnail' src='checkerBoard.jpeg'></img>
    </div>
  );
};
