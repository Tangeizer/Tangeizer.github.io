import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Activities} from './Activities';
import {Information} from './Information';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import { Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
      Цифровая туристическая платформа
      </h3>

      <Navigation/>
      <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/activities' component={Activities}/>
       <Route path='/information' component={Information}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
