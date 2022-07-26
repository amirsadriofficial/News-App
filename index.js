import 'react-native-gesture-handler';

/**
 * @format
 */

// import React from 'react';
import {AppRegistry} from 'react-native';
// import {Provider} from 'react-redux';
import App from './src/App';
import {name as appName} from './app.json';
// import store from './src/redux/store';

// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
