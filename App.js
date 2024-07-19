

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Logout from './components/Logout';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Simple Authentication Example</h1>
        <Login />
        <Logout />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
