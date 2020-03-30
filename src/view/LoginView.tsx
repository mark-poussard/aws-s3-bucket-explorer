import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import S3NavigationController from '../business/network/S3NavigationController';

const LoginView : React.FC = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const login = (username : string, password : string) => {
        setUsername(username);
        setPassword(password);
        setLoggedIn(true);
    }

    if(loggedIn){
        S3NavigationController.doAuthenticatedRequests(username, password);
    }

    if(!loggedIn){
        return <LoginForm doLogin={login}/>
    }
    return (
        <div>
            {props.children}
        </div>
    );
}
export default LoginView;