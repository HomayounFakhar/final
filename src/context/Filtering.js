import React, { useState } from 'react';

// Filtering
const initalState = {
MinPrice : 0,
MaxPrice : 100,
filterProductName : "T-Shirt"
};

export const ContextFilter = React.createContext();

const Filtering = ({ children }) => {
    const [filter,setFilter] = useState(initalState);
     return (
     <ContextFilter.Provider value={[filter, setFilter]}>{children}</ContextFilter.Provider>
);
};

export default Filtering;
