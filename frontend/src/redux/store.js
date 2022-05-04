import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducer } from './reducers/carsReducer';
import { alertReducer } from './reducers/alertReducer';
import { bookingsReducer } from './reducers/bookingsReducer';
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const rootReducers = combineReducers({
    carsReducer , alertReducer ,bookingsReducer
})
export const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
)