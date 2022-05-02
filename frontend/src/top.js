import axios from 'axios';
import {DragPicture} from './dragPicture.js';
import {SearchGames} from './search.js';
import React, {useEffect, useState} from 'react';
import {AppContext} from './AppContext.jsx';
import {Item} from './Item.js';
import {WebcamCapture} from './webcam.js';
import {UserUploaded} from './userUploaded.js';
import {PieceIcons} from './pieceIcons.js';
import {SidePanels} from './sidePanels.js';

export const Top = () => {
 const [gameList, setGameList] = useState([]);
 const [searchTerm, setSearchTerm] = useState('Catan');
 const [sidePanels, setSidePanels] = useState(false);
 const [dragPictureArr, setDragPictureArr] = useState([{'img':'red.png',style: {
  top:30,
  left:30,
  width:30,
  height:30,
  position: 'absolute',
  transform: `rotate(0deg)`
}},{'img':'black.png',style: {
  top:30,
  left:30,
  width:30,
  height:30,
  position: 'absolute',
  transform: `rotate(0deg)`
}}]);
 const [gameSelected, setGameSelected] = useState('');
 const [pieceIconsArr, setPieceIconsArr] = useState([]);
 const [cleanUpImage, setCleanUpImage] = useState(false);

 useEffect(() => {
  axios
  .get(`https://api.boardgameatlas.com/api/search?name=catan&client_id=Go7DiGbFKa&limit=10`)
  .then((results) => {
    console.log('got randomgames: ', results);
    setGameList(results.data.games);
  });
 },[]);

  return(
    gameList.length<2 ? <div>loading</div>
    : gameSelected ?    <AppContext.Provider value={{
      pieceIconsArr, setPieceIconsArr,
      gameList, setGameList,
      searchTerm, setSearchTerm,
      dragPictureArr, setDragPictureArr,
      gameSelected, setGameSelected,
      cleanUpImage, setCleanUpImage,
      sidePanels, setSidePanels
    }}>
      <UserUploaded />
      {console.log('rendering top lvl and ',cleanUpImage)}
      {cleanUpImage? <div style={{zIndex:9999,top: '10%',left:'10%', height:"86%", width:"80%", position:'absolute',overflow:'auto',border:'5px ridge blue'}}>
      <div style= {{font:'70px', color:'black'}} onClick= {() => {setCleanUpImage(false)}}>X</div>
    <iframe style={{top: '0%',left:'0%', height:"95%", width:"95%",overflow:'auto'}} src="http://localhost:8080"></iframe>
 </div>:null}

      <PieceIcons />
      {pieceIconsArr.map((oneImg) => {
        return(<div>{!oneImg.img? null:<DragPicture props={oneImg}/>} </div>);
      })}

    <WebcamCapture /></AppContext.Provider>


    :<AppContext.Provider value={{
      pieceIconsArr, setPieceIconsArr,
      gameList, setGameList,
      searchTerm, setSearchTerm,
      dragPictureArr, setDragPictureArr,
      gameSelected, setGameSelected,
      cleanUpImage, setCleanUpImage,
      sidePanels, setSidePanels
    }}>
    <div style = {{left:'-20%',width:'110%'}}>
    {console.log('rendering top lvl')}
      <h1>GAMES</h1>
      <SearchGames />

      <Item />
      </div>
      </AppContext.Provider>
  )
}
