import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id}=useParams();
  const navigate = useNavigate();
const [apiData,setApiData]=useState({
  name:" ",
  key:" ",
  published_at:" ",
  typeof:" "

});
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZiM2YyMjljNWZlZTRkMTA4MTJjYjA4ZjAxNzU0YyIsInN1YiI6IjY2NWQ4YjdlMzdlNmYzNjhkYzc5OTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PUrROPoys9lMWJBGs08wRYYivAU7XXD3KO_SpdTYiLQ'
    }
  };
  
 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
 },[])
  return (
    <div className='player'>
      <img src={backarrow} onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData. published_at.slice(0,10)}</p>
        <p>{apiData. name}</p>
        <p>{apiData. type}</p>

      </div>
    </div>
  )
}

export default Player
