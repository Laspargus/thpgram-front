import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Home from "./../src/Pages/Home";
import Register from "./../src/Pages/Register";
import Login from "./../src/Pages/Login";
import Navbar from "./../src/Components/Navbar";
import MyProfile from "./../src/Pages/MyProfile";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user_id = useSelector((state) => state.user_id);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/register">
              {isAuthenticated ? (
                <Redirect to={"/profiles/" + user_id} />
              ) : (
                <Register />
              )}
            </Route>

            <Route path="/login">
              {isAuthenticated ? (
                <Redirect to={"/profiles/" + user_id} />
              ) : (
                <Login />
              )}
            </Route>
            <Route path="/myprofile">
              {!isAuthenticated ? <Redirect to="/login/" /> : <MyProfile />}
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
