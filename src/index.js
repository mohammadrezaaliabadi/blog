import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsIndex from "./containers/posts_index";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye!</div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="container">
          <h1>Header</h1>
          <Switch>
            <Route path="/" component={PostsIndex} />
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
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
