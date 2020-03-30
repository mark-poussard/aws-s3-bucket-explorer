import React, { useState } from 'react';
import './LoginForm.scss';

interface ILoginFormProps{
    doLogin : (username : string, password : string) => void;
}

const LoginForm : React.FC<ILoginFormProps> = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const submitOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            formSubmit();
        }
    }
    const formSubmit = () => {
        props.doLogin(username, password);
    }
    return (
        <div className={`login-form`}>
            <div>Username : <input value={username} 
                onChange={onUsernameChange}
                onKeyPress={submitOnEnter}/></div>
            <div>Password : <input value={password} 
                onChange={onPasswordChange} 
                onKeyPress={submitOnEnter}
                type="password" /></div>
            <div><button onClick={formSubmit}>Ok</button></div>
        </div>
    )
}
export default LoginForm;