import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { INTRO__ENTERED, INTRO__PLAYED } from './actions/types';

const thunk = (dispatch, getState) => next => action => action instanceof Function ? action(dispatch, getState) : next(action);

export default history => createStore(
    combineReducers({
        router: connectRouter(history),
        queueIntro(state = {entered: false, queued: false}, {type}) {
            if (state.entered) {
                return state;
            }
            switch(type) {
                case INTRO__ENTERED:
                    return {entered: false, queued: true};
                case INTRO__PLAYED:
                    return {entered: true, queued: false};
                default:
                    return state;
            }
        }
    }),
    applyMiddleware(thunk, routerMiddleware(history))
);
