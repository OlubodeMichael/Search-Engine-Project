import React, { useReducer} from "react";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";


function reducer(state, action) {
  switch (action.type) {
    case 'searchClicked':
      return {
        ...state,
        status: 'result'
      }
    default:
      return state;
  }
}

const initialState = {
  status: 'home',
  query: '',
  queryList: [],
  result: false,
}
function App( ) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {status, result} = state
  
  return (
    <div>
      { status === 'home' && <Home result={result}/> }
      { status === 'result' && <Result /> }
    </div>
  )
}


export default App;