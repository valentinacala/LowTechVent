import { createStore, Store } from 'redux';
import reducer from './ts/store/reducers/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer)

const configureStoreAndPersistor =  () => {
    let store: Store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
};

export default configureStoreAndPersistor