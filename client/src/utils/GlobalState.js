
// createContext will be used to instantiate a new context object... used to create a container to hold our global state data
// useContext is a reacthook that will allow us to use state created from createContext function
import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
// Context objects come with 2 components ( Provider, Consumer). Provider = special react component that we wrap app in to make state data available. Consumer = means of grabbing and using the data the provider holds for us
const { Provider } = StoreContext;

// Create custom provider function

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
