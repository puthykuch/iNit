import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({ predicate: (getState, action) => { __DEV__ }, diff: true, collapse: true });

// a fucntion which can store auto persist our data
export default (initialState = ()) => {
  // =========================================
  // Middleware Configuration
  // =========================================
  const middleware = [thunk, logger];
    
  // =========================================
  // Store Enhancers
  // =========================================
  const enhancers = [];
  
  // =========================================
  // Store Instantiation
  // =========================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  return store;
};