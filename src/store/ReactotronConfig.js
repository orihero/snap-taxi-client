import Reactotron from 'reactotron-react-native'
import AsyncStorage from "@react-native-community/async-storage"
import sagaPlugin from 'reactotron-redux-saga'
import {reactotronRedux} from 'reactotron-redux'

export default Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .useReactNative()
    .connect();
