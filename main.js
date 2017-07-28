import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';  
import { createStore, applyMiddleware } from 'redux';
import { dispatch, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';




import App from './App.js';
import Login from './src/Login';
import About from './src/About';
import Home from './src/Home';
import Post from './src/Post';

import allReducers from './src/store/reducers';


const loggerMiddleware = createLogger();
const store = createStore(allReducers, applyMiddleware(thunkMiddleware, loggerMiddleware));


//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="login" component={Login} />
        <Route path="about" component={About} />
        <Route path="about" component={About} />
        <Route path="post" component={Post} />
        
        
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));