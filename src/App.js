import React from 'react';
import Messages from './containers/Messages/Messages';
import Login from './containers/Login/Login';
import Chat from './containers/Chat/Chat';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/messages" exact={true} component={Messages}/>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/chat" exact={true} component={Chat}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
