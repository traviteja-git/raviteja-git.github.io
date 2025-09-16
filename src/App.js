import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ArticlesList from "./containers/articles/ArticlesList";
import ArticleView from "./containers/articles/ArticleView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/articles/:slug">
          <Main minimal />
          <ArticleView />
        </Route>
        <Route path="/articles">
          <Main minimal />
          <ArticlesList />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
