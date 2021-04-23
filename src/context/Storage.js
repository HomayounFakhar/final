import React, { useState } from 'react';

const initalState = {
Username : '',
Password : '',
ProductName :'',  
ProductCode  :'',
OldPrice  :'',
Price  :'',
Description  :'', 
Group  :'',
SizeAvailabliy  :'',
};

export const Context = React.createContext();

const Contexts = ({ children }) => {
    const [state,setState] = useState(initalState);
     return (
     <Context.Provider value={[state, setState]}>{children}</Context.Provider>
);
};

export default Contexts;
