import storage from '@react-native-community/async-storage';
import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistReducer} from 'redux-persist'
import rootReducer from './reducers';
import rootSaga from "./sagas";

export default (initialState = {}) => {

    const persistConfig = {
        key: 'root',
        storage
    };

    const sagaMiddleware = createSagaMiddleware();

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store;

    store = createStore(
        persistedReducer,
        compose(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);

    return {store, persistor};

};