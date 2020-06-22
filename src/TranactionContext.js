const { createContext } = require("react");
import React, { createContext, useReducer} from 'react';

const initialState = {
    transactions: [{
        id: 1,
        description: '',
        amount: 0.00
    }]
}
export default TransactionContext = createContext(initialState);
