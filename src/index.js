import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import PostsIndex from "./containers/posts_index";
import PostsNew from "./containers/posts_new";
import PostsShow from "./containers/posts_show";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="container">
          <h1>Header</h1>
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/">
              <PostsIndex />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
