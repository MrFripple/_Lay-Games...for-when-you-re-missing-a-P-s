import React, { Fragment, useState, useContext } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import {AppContext} from './AppContext.jsx';
import Draggable from 'react-draggable';


export const DragPicture = ({props}) => {
  const {pieceIconsArr} = useContext(AppContext);
  const [width, setWidth] = useState(props.width || 50)
  const [height, setHeight] = useState(props.height|| 50)
  const [top, setTop] = useState(props.top|| 120+pieceIconsArr.length*5)
  const [left, setLeft] = useState(props.left|| 120+pieceIconsArr.length*5)
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle || `rotate(0deg)`)


  const contentStyle = {
    top,
    left,
    width,
    height,
    position: 'absolute',
    transform: `rotate(${rotateAngle}deg)`
  }

  const handleResize = (style, isShiftKey, type) => {
    const { top, left, width, height } = style
    setWidth(Math.round(width))
    setHeight(Math.round(height))
    setTop(Math.round(top))
    setLeft(Math.round(left))
  }

  const handleRotate = rotateAngle => {
    setRotateAngle(rotateAngle)
  }

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX)
    setTop(top + deltaY)
  }

  return (


      <div>
        {console.log(props)}
          <img  style={contentStyle}src={props.img}/>
      <ResizableRect
        top={typeof top === 'number'? top : 30}
        rotatable
        left={typeof left === 'number'? left : 30}
        aspectRatio
        minWidth={10}
        width={typeof width === 'number'? width : 11}
        minHeight={10}
        height={typeof height === 'number'? height : 11}
        onDrag={handleDrag}
        onRotate={handleRotate}
        onResize={handleResize}
        zoomable="nw, ne, se, sw"
        rotateAngle={typeof rotateAngle === 'number'? rotateAngle : 10}
      />
      </div>
        );
}
//   return (

//     <div>
//       {pieceIconsArr.map((oneImg) => {
//         console.log('drag img loop:', oneImg);
//         return (
//           <div>
//           <img  style={contentStyle}src={oneImg.img}/>
//       <ResizableRect
//         top={typeof top === 'number'? top : 10}
//         rotatable
//         left={typeof left === 'number'? left : 10}
//         aspectRatio
//         minWidth={10}
//         width={typeof width === 'number'? width : 10}
//         minHeight={10}
//         height={typeof height === 'number'? height : 10}
//         onDrag={handleDrag}
//         onRotate={handleRotate}
//         onResize={handleResize}
//         zoomable="nw, ne, se, sw"
//         rotateAngle={typeof rotateAngle === 'number'? rotateAngle : 10}
//       />
//       </div>
//         );
//       })}
//     </div>
//   )
// }



// export const DragPicture = () => {
//   const {dragPictureArr, setDragPictureArr} = useContext(AppContext);
//   console.log('making draggable picture');

//   return (
//     <Draggable  className = 'resize'>
//         <img  src={dragPictureArr[0]}/>
//       </Draggable>
//   );
// };



















