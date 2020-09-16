import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import './App.css';
import Main from "./containers/Main/Main";

class App extends Component {
  render() {
    return (
        <Fragment>
            <header>
                <Toolbar/>
            </header>
            <Container style={{marginTop: '20px'}}>
                <Switch>
                   *<Route path="/" exact component={Main}/>*
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </Container>
        </Fragment>
    );
  }
}

export default App;

