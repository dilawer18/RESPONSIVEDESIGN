//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';

// create a component
const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

//make this component available to the app
export default App;
