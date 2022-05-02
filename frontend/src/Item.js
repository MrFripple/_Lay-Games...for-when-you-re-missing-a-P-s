import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import {SidePanels} from './sidePanels.js';


export const Item = () => {
  const {gameList, setGameSelected,sidePanels, setSidePanels} = useContext(AppContext);

  return( gameList.length<2? null :
    <div >
    {console.log('sadfadfafafa:',gameList)}
    {gameList.map((oneGame) => {
      return(
      <div  onClick = {() => {setGameSelected(oneGame.name)}} className = "itemRow">
        {sidePanels ? <SidePanels props = {oneGame}/> :null}
        <img className = "imgRow" onClick = {() => {}} src = {oneGame.image_url} />
        <h2>{oneGame.name}</h2>
       <div dangerouslySetInnerHTML= {{__html: oneGame.description.slice(0,250)+'...'}} onMouseEnter= {(e)=>{e.target.innerHTML= oneGame.description;setSidePanels(oneGame.name)}}onMouseLeave= {(e)=>{e.target.innerHTML= oneGame.description.slice(0,250)+'...';setSidePanels(false);}}></div>

      </div>);
    })
    }
    </div>);
};



