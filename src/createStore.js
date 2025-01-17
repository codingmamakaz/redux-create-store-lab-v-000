// import countReducer from './reducers/candyReducer'
// import candyReducer from './reducers/candyReducer'

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  dispatch({ type: '@@INIT'})

  function getState() {
    return state
  }

  return {dispatch, getState}
}

function render() {
  const container = document.getElementById('container');
}

