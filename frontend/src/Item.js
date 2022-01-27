import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from './AppContext.jsx';

export const Item = () => {
  const {gameList, setGameSelected} = useContext(AppContext);

  return( gameList.length<2? null :
    <div>
    {console.log('sadfadfafafa:',gameList)}
    {gameList.map((oneGame) => {
      return(
      <div  onClick = {() => {setGameSelected(oneGame.name)}} className = "itemRow">
        <img className = "imgRow" onClick = {() => {}} src = {oneGame.image_url} />
        <h2>{oneGame.name}</h2>
       <div dangerouslySetInnerHTML= {{__html: oneGame.description.slice(0,250)+'...'}}></div>

      </div>);
    })
    }
    </div>);
};



