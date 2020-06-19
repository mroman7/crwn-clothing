import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
//middleware are used to interact with actions.
const middleware = [logger];
//a store is used to store our whole application state in an object tree.
const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export {store, persistor};
