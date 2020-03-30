import React from 'react';
import Settings from '../../Settings';

interface IS3ObjectLinkProps{
    linkPath : string;
}

const S3ObjectLink : React.FC<IS3ObjectLinkProps> = props => {
    return (
        <a href={Settings.S3_URL + props.linkPath} download>
            {props.children}
        </a>
    )
}
export default S3ObjectLink;