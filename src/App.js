import React from 'react';
import Search from './components/Search'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
    
  );
}

export default App;
