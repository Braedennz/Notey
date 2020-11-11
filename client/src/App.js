import React from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Main from './pages/Main';

export default function App() {
  return (
    <div class="d-flex">
      <Sidebar />
      <div id="app-container">
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}