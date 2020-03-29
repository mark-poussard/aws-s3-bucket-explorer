import React from 'react';
import './App.scss';
import BucketNavigator from './view/BucketNavigator';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <BucketNavigator />
    </div>
  )
}
export default App;
