import Reactotron from 'reactotron-react-native'
import AsyncStorage from "@react-native-community/async-storage"
import sagaPlugin from 'reactotron-redux-saga'
import {reactotronRedux} from 'reactotron-redux'

export default Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({host: '192.168.1.106'})
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .useReactNative()
    .connect();
