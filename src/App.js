import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter'


export default function App() {

  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to="/gif/pandas">Gifs de Pandas</Link>
      <Link to="/gif/snoopy">Gifs de Snoopy</Link>
      <Link to="/gif/racoon">Gifs de Mapaches</Link>
      <Link to="/gif/osos">Gifs de Osos</Link>
      
      <Route 
      component={ListOfGifs}
      path="/gif/:keyword" 
      />
      
      
      </section>
    </div>
  )
}


