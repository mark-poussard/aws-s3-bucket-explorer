import React from 'react';
import NavigationLink from './components/NavigationLink';
import CommonPrefixe from '../model/CommonPrefixe';

interface ICommonPrefixeViewProps{
    commonPrefixe : CommonPrefixe;
    setPrefix : (prefix : string) => void;
}

const CommonPrefixeView : React.FC<ICommonPrefixeViewProps> = props => {
    return (
        <div>
            <NavigationLink doNavigate={() => props.setPrefix(props.commonPrefixe.prefix)}>
                {props.commonPrefixe.getName()}
            </NavigationLink>
        </div>
    );
}
export default CommonPrefixeView;