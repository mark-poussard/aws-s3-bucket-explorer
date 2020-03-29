import React from 'react';
import NavigationLink from './NavigationLink';

interface IHomeLinkProps{
    setPrefix : (prefix : string) => void;
}

const HomeLink : React.FC<IHomeLinkProps> = props => {
    return (
        <NavigationLink doNavigate={() => props.setPrefix("")}>Home</NavigationLink>
    )
}
export default HomeLink;