import React, { useEffect, useContext, useState } from 'react';
import Values from 'values.js';
import Grid from "./components/Grid";
import Navigation from "./components/Navigation";

export const Context = React.createContext()

function App() {
  const [state, setState] = useState({
    array: new Values("#6f53c1").all(Number(10)),
    error: false,
    color: '#6f53c1',
    weight: 10
  })

  return (
    <>
    <Context.Provider value={[state, setState]}>
      <Navigation />
      <div className="color-grid">
        {
        state.array.map((color,index) => <Grid 
        key={index}
        hexName={color.hex}
        index={index}
        {...color} 
        /> )
      } 
      </div>
    </Context.Provider>
    </>
  );
}

export default App;
