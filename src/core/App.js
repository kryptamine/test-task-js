import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Country from '../countries/containers/Country';


export const App = () => {
    return (
        <Provider store={store}>
            <Country />
        </Provider>
    );
};
