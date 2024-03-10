import React, { useReducer } from 'react';

const initialState = {
  query: '',
  queryList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'ADD_QUERY':
      return {
        ...state,
        queryList: [...state.queryList, { id: Date.now(), text: action.payload }],
      };
    case 'REMOVE_QUERY':
      return {
        ...state,
        queryList: state.queryList.filter(query => query.id !== action.payload),
      };
    default:
      return state;
  }
};

export function Search({ result }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.query !== '') {
      dispatch({ type: 'ADD_QUERY', payload: state.query });
    }

    if (state.queryList.length >= 8) {
      state.queryList.shift();
    }

    // Additional actions related to form submission can be performed here
    console.log(state.query);
  };

  const handleChange = (e) => {
    dispatch({ type: 'SET_QUERY', payload: e.target.value });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_QUERY', payload: id });
  };

  return (
    <div className={`${!result ? 'min-h-screen' : 'py-6'} flex items-center justify-center`}>
      <div className={`container mx-auto flex ${!result ? 'flex-col align-middle' : ''}`}>
        <h4 className={`w-auto flex justify-center ${!result ? 'text-9xl' : 'text-7xl cursor-pointer text-blue-600'}`}>&#10837;</h4>
        <form onSubmit={handleSubmit} className="p-2 flex items-center rounded-full overflow-hidden shadow-md transition duration-500 bg-gray-200">
          <input
            type="search"
            name="query"
            value={state.query}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Advin: Your Adventure Awaits..."
            required
            className="flex-1 border-none px-4 py-2 text-gray-700 h-auto bg-gray-200"
          />
          <button
            type="submit"
            className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-200 transition duration-500 hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            <img src="https://img.icons8.com/ios/25/search--v1.png" alt="search--v1" />
          </button>
        </form>
        <Query queryList={state.queryList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

function Query({ queryList, handleDelete }) {
  return (
    <div>
      {queryList.map((query) => (
        <div key={query.id} className="flex items-center">
          <span>{query.text}</span>
          <button onClick={() => handleDelete(query.id)} className="ml-2 text-red-500">X</button>
        </div>
      ))}
    </div>
  );
}
