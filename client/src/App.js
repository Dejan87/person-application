import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Aux from "./hoc/Auxiliary/Auxiliary";
import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home/Home";
import AddPerson from "./containers/AddPerson/AddPerson";
import UpdatePerson from "./containers/UpdatePerson/UpdatePerson";

class App extends Component {

  render() {
    return (
      <Aux>
        <Navigation />
        <main>
            <Switch>
                <Route path="/add-person" exact component={AddPerson} />
                <Route path="/update-person/:id" exact component={UpdatePerson} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </main>
      </Aux>
    );
  }
}

export default App;
