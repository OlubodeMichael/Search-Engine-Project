import React, { useReducer } from 'react';

// Initial state for the search component
const initialState = {
  query: '',
  queryList: [],
  QueryListDisplay: false,
};

// Reducer function to handle state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'ADD_QUERY':
      return {
        ...state,
        queryList: [...state.queryList, { id: Date.now(), text: action.payload }],
        query: '',
      };
    case 'REMOVE_QUERY':
      return {
        ...state,
        queryList: state.queryList.filter(query => query.id !== action.payload),
      };
    case 'QueryListShow':
      return {
        ...state,
        QueryListDisplay: !state.QueryListDisplay
      }
    default:
      return state;
  }
};

// Search component
export function Search({ result, dispatch }) {
  const [state, StateDispatch] = useReducer(reducer, initialState);
  const { queryList, query, QueryListDisplay } = state;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.query !== '') {
      StateDispatch({ type: 'ADD_QUERY', payload: state.query });
    }

    if (state.queryList.length >= 8) {
      state.queryList.shift();
    }
    dispatch({type: 'searchClicked'})
    // Additional actions related to form submission can be performed here
    console.log(state.query);
  };

  // Function to handle input field changes
  const handleChange = (e) => {
    StateDispatch({ type: 'SET_QUERY', payload: e.target.value });
  };

  // Function to handle query deletion
  const handleDelete = (id) => {
    StateDispatch({ type: 'REMOVE_QUERY', payload: id });
  };

  // Function to toggle query list display
  const toggleQueryListDisplay = () => {
    StateDispatch({ type: 'QueryListShow' });
  };

  // Function to show query list when input field is clicked
  const showQueryList = () => {
    StateDispatch({ type: 'QueryListShow' });
  };

  return (
    <div className={`${!result ? 'min-h-screen w-72 sm:w-[600px]' : 'py-6 justify-start'} flex items-center justify-center  mx-auto`}>
      <div className={`container mx-auto flex ${!result ? 'flex-col align-middle' : ''}`}>
        <h4 className={`w-auto flex justify-center ${!result ? 'text-9xl' : 'text-6xl cursor-pointer text-blue-600'}`}>&#10837;</h4>
        <form onSubmit={handleSubmit} className="p-2 flex items-center rounded-full overflow-hidden shadow-md transition duration-500 bg-gray-200 ">
          <input
            type="search"
            name="query"
            value={query}
            onChange={handleChange}
            onFocus={showQueryList} // Toggle the query list display when the input field is clicked
            autoComplete="off"
            placeholder="Advin: Your Adventure Awaits..."
            required
            className="flex-1 border-none px-4 py-3 text-gray-700 h-auto bg-gray-200"
          />
          <button
            type="submit"
            className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-200 transition duration-500 hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            <img src="https://img.icons8.com/ios/25/search--v1.png" alt="search--v1" />
          </button>
        </form>
        {QueryListDisplay && <Query queryList={queryList} handleDelete={handleDelete} />}
      </div>
      
    </div>
  );
}

// Query component to display the list of queries
function Query({ queryList, handleDelete }) {
  return (
    <div className='w-auto rounded-lg bg-gray-200'>
      {queryList.map((query) => (
        <div key={query.id} className="flex items-center p-4 hover:bg-gray-300 justify-between">
          <span>{query.text}</span>
          <button onClick={() => handleDelete(query.id)} className="ml-2 text-red-500">X</button>
        </div>
      ))}
    </div>
  );
}
