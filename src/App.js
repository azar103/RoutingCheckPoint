import React from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Category from "./Components/Category";
import Products from "./Components/Category";
import Login, {fakeAuth} from "./Components/Login";

import Home from "./Components/Home";
import Admin from "./Components/Admin";


export default function App() {

  return (
    <div>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}
const  PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}






