import React, { useState } from 'react';

const initalState = {
name : 'Homayoun',
passworld: '12345'
};

export const Context = React.createContext();

const Contexts = ({ children }) => {
  const [state,setState] = useState(initalState);
  return (
   <Context.Provider value={[state, setState]}>{children}</Context.Provider>
);
};

export default Contexts;
