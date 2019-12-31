import React, { useReducer } from 'react';
import './App.css';

type State = number[][]

const initialState: State = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

type Action =
  | {
    type: 'toggle',
    payload: {
      coordinates: { x: number, y: number }
    }
  }

function reducer(state: State, action: Action) {
  const { type, payload } = action
  switch (type) {
    case 'toggle':
      return state.map((y, iy) => (y.map((x, ix) => payload.coordinates.y === iy && payload.coordinates.x === ix ? Number(!x) : x)))
    default:
      throw new Error();
  }
}


const Board: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState as State);
  return (
    <div
      style={{ margin: 10 }}
    >
      {state
        .map((y, iy) => (<div
          key={`y${iy}`}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >{y
          .map((value, ix) =>
            <div
              key={`x${ix}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
                border: '1px solid black',
              }}
              onClick={() => dispatch({ type: 'toggle', payload: { coordinates: { x: ix, y: iy } } })}
            >
              {`${value}`}
            </div>)}
        </div>
        ))
      }
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Board />
      <Board />
    </div >
  );
}

export default App;
