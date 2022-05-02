import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from './AppContext.jsx';

export const SidePanels = ({props}) => {
  const {gameList, setGameSelected,sidePanels, setSidePanels} = useContext(AppContext);

  return(
    <span> {props.name !== sidePanels ? null :
    <div style={{position:'relative', left:'4%', top:'2%', width:'300'}}>{console.log(props)}
            <h2>
              Number of Players:
            </h2>
            <div>{props.min_players} - {props.max_players}</div>
            <h2>
              Playtime:
            </h2>
            <div  style={{position:'relative'}}> {props.min_playtime} -{Number(props.max_playtime)}</div>
            <h2>
              MSRP:
            </h2>
            <div  style={{position:'relative'}}> {props.msrp_text}</div>
    </div>}
    </span>);

};