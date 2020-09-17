import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router' ;
import PropTypes from 'prop-types';
import {Provider} from "react-redux";
import configureStore, {history} from "./store/configureStore";
import App from './App';
import {loadState, saveState} from "./store/localStorage";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(loadState());

store.subscribe(() => {
    saveState({
        users: {
            login: store.getState().users.login,
            admin: store.getState().users.admin
        }
    });
});

const Application = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    )
};

Application.propTypes = {
    history: PropTypes.object,
};

const app = (
    <Provider store={store}>
        <Application history={history}/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));