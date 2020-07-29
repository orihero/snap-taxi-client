import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';

import AppNavigator from "./src/navigation/AppNavigator";
import createStore from "./src/store/createStore";
import api from "./src/services/api";

const {store, persistor} = createStore();


const App = () => {

    useEffect(() => {
        api.setToken(store);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
};



export default App;
