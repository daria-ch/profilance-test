import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import newsReducer from "./reducers/newsReducer";

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    news: newsReducer
});

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
    return store;
};


