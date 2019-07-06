import React from 'react'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

const store = createStore(
  reducers, {
    comments: [
      "Comment #1",
      "Comment #2"
    ]
  }, 
  applyMiddleware(async, stateValidator)
);

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}