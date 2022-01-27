import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import axios from 'axios';

export const SearchGames= () => {

  const {setGameList, searchTerm, setSearchTerm} = useContext(AppContext);

  const newGames = (type) => {
    console.log('whya re you calling??????', searchTerm)
      axios
          .get(`https://api.boardgameatlas.com/api/search?name=${searchTerm}&client_id=Go7DiGbFKa&limit=10`)
          .then((results) => {
            setGameList(results.data.games);
          });
          };
return (
  <span style={{display: 'flex', justifyContent: 'center',paddingBottom:'1em'}}>
    <input style = {{width: '25em', borderRight: '1px solid cadetblue'}}
      placeholder="Search for games here" value = {searchTerm}  onChange = {(e)=> {setSearchTerm(e.target.value)}}></input>
      <button onClick= {() => {newGames()}}>search</button>
  </span>
);
};


