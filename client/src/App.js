import React from 'react';
import { Provider } from 'react-redux';
import TableContainer from './containers/tableContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TableContainer />
      </div>
    </Provider>
  );
}

export default App;
