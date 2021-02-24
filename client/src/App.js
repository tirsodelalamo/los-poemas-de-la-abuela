import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from './service/AuthService'

import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'
import Profile from './components/Pages/Profile/Profile'
import Home from './components/Pages/Home/Home'
import Poetry from './components/Pages/Poetry/Poetry'
import Summary from './components/Pages/Summary/Summary'
import PoetryDetail from './components/Pages/Poetry/PoetryDetail'
import Description from './components/Pages/Description/Description'
import Login from './components/Auth/Login/Login'
// import Register from './components/Pages/Register/Register'


function App(props) {

  const authService = new AuthService()

  const [loggedInUser, updateLoggedInUser] = useState(null)

  const setTheUser = (user) => {
    updateLoggedInUser(user)
    console.log(loggedInUser)
  }

  const fetchUser = () => {
    authService
      .isLoggedIn()
      .then(
        (response) => loggedInUser === null && updateLoggedInUser(response.data)
      )
      .catch((err) => console.log({ err }));
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [props])
  
  return (
    <Fragment>
      <Navbar loggedInUser={loggedInUser} setTheUser={setTheUser} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/poesias"
          render={(props) => <Poetry loggedInUser={loggedInUser} {...props} />}
        />
        <Route path="/indice" render={(props) => <Summary {...props} />} />
        <Route path="/quien-soy" render={() => <Description />} />
        <Route
          path="/perfil"
          render={(props) => <Profile loggedInUser={loggedInUser} {...props} />}
        />
        <Route
          path="/poema/:id"
          render={(props) => <PoetryDetail {...props} />}
        />
        <Route
          path="/poema/:id"
          render={(props) => <Profile {...props} />} 
        />
        <Route
          path="/iniciar-sesion"
          render={(props) => <Login {...props} />}
        />
        {/* <Route path="/registro" render={(props) => <Register {...props} />} /> */}
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
