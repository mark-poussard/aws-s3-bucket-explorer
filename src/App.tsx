import React from 'react';
import './App.scss';
import BucketNavigator from './view/BucketNavigator';
import LoginView from './view/LoginView';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <LoginView>
        <BucketNavigator />
      </LoginView>
    </div>
  )
}
export default App;
