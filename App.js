import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';

import AppNavigator from "./src/navigation/AppNavigator";
import createStore from "./src/store/createStore";
import SplashScreen from "./src/screens/SplashScreen";

const {store, persistor} = createStore();


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen/>} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
};


export default App;
