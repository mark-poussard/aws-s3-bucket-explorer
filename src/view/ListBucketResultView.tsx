import React from 'react';
import ListBucketResult from '../model/ListBucketResult';
import NavigationView from './NavigationView';
import ContentView from './ContentView';
import CommonPrefixeView from './CommonPrefixeView';

interface IListBucketResultViewProps{
    listBucketResult : ListBucketResult;
    setPrefix : (prefix : string) => void;
}

const ListBucketResultView : React.FC<IListBucketResultViewProps> = props => {
    return (
        <div>
            <NavigationView prefix={props.listBucketResult.prefix} 
                setPrefix={props.setPrefix}/>
            {/* <ObjectHeaders /> */}
            {props.listBucketResult.commonPrefixes.map(commonPrefixe => 
                <CommonPrefixeView commonPrefixe={commonPrefixe} 
                    setPrefix={props.setPrefix} />
            )}
            {props.listBucketResult.contents.map(content => 
                <ContentView content={content} />
            )}
        </div>
    )
}
export default ListBucketResultView;