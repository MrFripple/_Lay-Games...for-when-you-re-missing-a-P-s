import {DragPicture} from './dragPicture.js';
import React, { Fragment, useState, useContext } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
import {AppContext} from './AppContext.jsx';
import Draggable from 'react-draggable';


export const PieceIcons = props => {
  const {dragPictureArr, setDragPictureArr,pieceIconsArr, setPieceIconsArr,cleanUpImage, setCleanUpImage} = useContext(AppContext);

  const iconClick = (e) => {
    let rotateAngle =0;
    const contentStyle = {
      top:30,
      left:30,
      width:30,
      height:30,
      position: 'absolute',
      transform: `rotate(${rotateAngle}deg)`
    }
    setPieceIconsArr([...pieceIconsArr, {'img': e.target.id,
                     'style': contentStyle }])
  }

return (
<div >
  <Draggable >
    <div className = 'resize pieceIconsHolder'>
      {dragPictureArr.map((oneImg) => {console.log('making a list of icons!!!');
        return (
          <img id={oneImg.img} onClick={(e) => {iconClick(e)}} className = 'pieceIcons'  src={oneImg.img}></img>
        );
      })}
      <button onClick={() => {

        setCleanUpImage(true);
      }}>Clean up Image</button>
      </div>
    </Draggable>
</div>
);

}