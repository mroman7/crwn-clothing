import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatHome = () => (
  <div>
    <h1>Hat's Homepage:  </h1>
    
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats/' component={HatHome} />
    </div>
  );
}

export default App;
