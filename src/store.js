import { compose, applyMiddleware, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from './reducers/index';

const middleware = applyMiddleware(promise(), thunk, createLogger())

let store = compose(
  autoRehydrate()
)(createStore)(rootReducer, middleware)

persistStore(store);


export default store;