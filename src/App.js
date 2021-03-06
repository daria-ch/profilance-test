import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Main from "./containers/Main/Main";
import News from "./containers/News/News";
import NewArticle from "./containers/NewArticle/NewArticle";
import ChangeStatus from "./containers/ChangeStatus/ChangeStatus";
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Toolbar/>
                </header>
                <Container style={{marginTop: '20px'}}>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/news" exact component={News}/>
                        <Route path="/new" exact component={NewArticle}/>
                        <Route path="/news/:id" exact component={ChangeStatus}/>
                        <Route render={() => <h1>Not found</h1>}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default App;

