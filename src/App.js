import React from 'react';
import Search from './components/Search'
import Similar from './components/Similar'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Search />
      <Similar />
    </Provider>
    
  );
}

export default App;
