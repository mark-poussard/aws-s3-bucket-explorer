import React from 'react';

interface INavigationLinkProps{
    doNavigate : () => void;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <a onClick={props.doNavigate}>{props.children}</a>
    )
}
export default NavigationLink;