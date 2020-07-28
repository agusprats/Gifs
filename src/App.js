import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] =  useState([])
  
  useEffect(function () {
    getGifs({ keyword: 'snoopy'}).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {// eslint-disable-next-line 
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        
      </section>
    </div>
  );
}

export default App;
