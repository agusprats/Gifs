import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter'


export default function App() {

  return (
    <div className="App">
      <section className="App-content">
      <h1>Gifs List</h1>
      <Link to="/gif/pandas">Pandas</Link>
      <Link to="/gif/racoon">Racoon</Link>
      <Link to="/gif/bears">Bears</Link>
      <Link to="/gif/snoopy">Snoopy</Link>
      <Link to="/gif/garfield">Garfield</Link>
      
      <Route 
      component={ListOfGifs}
      path="/gif/:keyword" 
      />
      
      
      </section>
    </div>
  )
}
