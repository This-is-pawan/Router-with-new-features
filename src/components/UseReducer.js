import React, { useReducer } from 'react';

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error('Unknown action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return (
   <>
   <h1>useReucer</h1>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Count: {state.count}</h1>
      <button  className='btn btn-primary' onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button className='btn btn-primary' onClick={decrement}>Decrement</button>
    </div>
    </>
  );
};

export default UseReducer;
