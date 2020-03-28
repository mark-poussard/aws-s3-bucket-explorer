import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <AppRouter />
    </div>
  )
}
export default App;
