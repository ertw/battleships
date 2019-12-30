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
        .map((y, iy) => (<div>{y
          .map((x, ix) =>
            <span
              onClick={() => setBoard(Object.assign([...board], {
                [iy]: Object.assign([...board[iy]], {
                  [ix]: Number(!y[ix])
                })
              }))}
              style={{ margin: 5 }}
            >
              {`${x}`}
            </span>)}
        </div>
        )
        )
      }

    </div>
  );
}

export default App;
