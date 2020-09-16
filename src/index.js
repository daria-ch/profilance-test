import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router' ;
import PropTypes from 'prop-types';
import configureStore, {history} from "./store/configureStore";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from "react-redux";

const store = configureStore();

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