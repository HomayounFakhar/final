import React, { useState } from 'react';

// Filtering
const initalState = {
Price : '',
};

export const ContextFilter = React.createContext();

const Filtering = ({ children }) => {
    const [Filter,setFilter] = useState(initalState);
     return (
     <ContextFilter.Provider value={[Filter, setFilter]}>{children}</ContextFilter.Provider>
);
};

export default Filtering;
