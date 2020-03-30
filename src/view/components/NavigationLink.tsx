import React from 'react';
import './NavigationLink.scss';

interface INavigationLinkProps{
    doNavigate : () => void;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <span onClick={props.doNavigate} className={`navigation-link`}>
            {props.children}
        </span>
    )
}
export default NavigationLink;