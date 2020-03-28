import React from 'react';
import { LoaderIcon } from '../icon/FontAwesome';
import './Loader.scss';

interface ILoaderProps extends React.HTMLAttributes<HTMLDivElement>{
    show ?: boolean;
}

const Loader : React.FunctionComponent<ILoaderProps> = props => {
    const {className, style, show, ...leftoverProps} = props;
    const cleanShow = (show != null)?show:true;
    const cleanClassName = (className != null) ? className : "";
    const mergedStyle = Object.assign({
        display : (cleanShow)?"initial":"none"
    }, style);
    return (
        <div className={`Loader ${cleanClassName}`} 
            style={mergedStyle}
            {...leftoverProps}>
            <LoaderIcon spin color={"gray"}/>
        </div>
    )
}
export default Loader;