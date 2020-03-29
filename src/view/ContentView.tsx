import React from 'react';
import Content from '../model/Content';
import S3ObjectLink from './components/S3ObjectLink';

interface IContentViewProps{
    content : Content;
}

const ContentView : React.FC<IContentViewProps> = props => {
    return (
        <div>
            <S3ObjectLink key={props.content.key}>
                {props.content.getName()}
            </S3ObjectLink>
        </div>
    )
}
export default ContentView;