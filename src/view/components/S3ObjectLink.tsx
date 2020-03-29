import React from 'react';
import Settings from '../../Settings';

interface IS3ObjectLinkProps{
    key : string;
}

const S3ObjectLink : React.FC<IS3ObjectLinkProps> = props => {
    return (
        <a href={Settings.S3_URL + props.key}>
            {props.children}
        </a>
    )
}
export default S3ObjectLink;