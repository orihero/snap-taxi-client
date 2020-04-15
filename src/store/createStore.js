import storage from '@react-native-community/async-storage';
import {createStore, compose, applyMiddleware} from "redux";
import {persistStore, persistReducer} from 'redux-persist'
import rootReducer from './reducers';
import rootSaga from "./sagas";
import middlewares, {sagaMiddleware} from "./middlewares";

export default (initialState = {}) => {

    const persistConfig = {
        key: 'root',
        storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store;

    if (process.env.NODE_ENV === 'production') {

        store = createStore(
            persistedReducer,
            initialState,
            compose(applyMiddleware(...middlewares))
        );

    } else {
        store = createStore(
            () => {},
            compose(applyMiddleware(...middlewares))
        );
    }

    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);

    // if (module.hot) {
    //     module.hot.accept('./reducers', () => {
    //         store.replaceReducer(require('./reducers/index').default);
    //     });
    // }

    return {store, persistor};

};