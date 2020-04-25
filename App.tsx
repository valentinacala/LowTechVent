import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStoreAndPersistor from './configureStore';
import HomeScreen from './ts/screens/HomeScreen';
import { ROUTES } from './ts/utils/navigationRoutes';

const Stack = createStackNavigator();

const store = configureStoreAndPersistor().store;
const persistor = configureStoreAndPersistor().persistor;

const App = () => {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.HOME_SCREEN}>

          <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen}/>
        
        </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;
