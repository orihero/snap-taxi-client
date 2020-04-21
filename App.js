import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from "./src/store/createStore";

const {store, persistor} = createStore();
import AppNavigator from "./src/navigation/AppNavigator";


const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigator/>
        </PersistGate>
    </Provider>
);


export default App;