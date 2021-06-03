import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
import ProductList from './products/ProductList';
import CartList from './products/CartList';
// import Auth from './routes/Auth';
import Home from '../routes/Home';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </>
          ) : (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/create" component={CreateProject} />
              <Route exact path="/product" component={ProductList} />
              <Route exact path="/cart" component={CartList} />
            </>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
