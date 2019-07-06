export default ({dispatch}) => next => action => {
  // Check if to see if the action has a payload property
  // If it does, then wait for it to resolve
  // If not, then send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  } 
  // We want to wait for the promise to resolve and then create a new action with that data and dispatch it
  action.payload.then((response) => {
    const newAction = {...action, payload: response};
    dispatch(newAction);
  })
}