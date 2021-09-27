import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import Contact from './Components/Contact';
import Aside from './Components/Aside';
import NotFound from './Components/NotFound.js';
import './stylesheet/index.css';
import SingleArticle from './Components/SingleArticle';
// import Home from './Components/Home';
import Articles from './Components/Articles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/contact'>
        <div className='container'>
          <Aside />
          <Contact />
        </div>
      </Route>
      <Route path='/articles'>
        <div className='container'>
          <Aside />
          <Articles />
        </div>
      </Route>
      <Route path='/' exact>
        <App />
      </Route>
      <Route path='/post/:slug' component={SingleArticle} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
