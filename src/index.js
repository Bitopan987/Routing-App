import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import Article from './components/Article';
import Help from './components/Help';
import Articles from './components/Articles';
import NotFound from './components/NotFound';
import data from './data.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <div className="flex justify-between">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/help" exact>
          <Help />
        </Route>
        <Route path="/articles">
          <Articles data={data} />
        </Route>
        <Route exact path="/article/:slug" component={Article}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
