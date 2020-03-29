import React from 'react';
import HomeLink from './components/HomeLink';
import NavigationLink from './components/NavigationLink';

interface INavigationViewProps{
    prefix : string;
    setPrefix : (prefix : string) => void;
}

const NavigationView : React.FC<INavigationViewProps> = props => {
    const prefixSplitArray = props.prefix.split("/");
    let prefixAggregation = "";
    const prefixes : string[] = [];
    for(const prefix of prefixSplitArray){
        prefixAggregation += prefix + "/"
        prefixes.push(prefixAggregation);
    }
    return (
        <div>
            <HomeLink setPrefix={props.setPrefix}/>
            {prefixes.map((prefix, i) =>
                <NavigationLink doNavigate={() => props.setPrefix(prefix)}>
                    {prefixSplitArray[i] + "/"}
                </NavigationLink>
            )}
        </div>
    );
}
export default NavigationView;