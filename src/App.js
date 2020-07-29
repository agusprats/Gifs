import React, { useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
 const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
      <button onClick={()=> setKeyword('mapache')}
      >Cambiar keyword</button>
      <ListOfGifs keyword={keyword} />
      

      </section>
    </div>
  )
}

export default App;
