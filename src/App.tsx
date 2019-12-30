import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
  return (
    <div className="App">
      {board
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
              onClick={() => setBoard(Object.assign([...board], {
                [iy]: Object.assign([...board[iy]], {
                  [ix]: Number(!y[ix])
                })
              }))}
            >
              {`${value}`}
            </div>)}
        </div>
        )
        )
      }

    </div >
  );
}

export default App;
