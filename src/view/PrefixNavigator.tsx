import React, { useState } from 'react';
import LoadData from './components/async/LoadData';
import S3NavigationController from '../business/network/ObjectsController';
import ListBucketResultView from './ListBucketResultView';

const PrefixNavigator : React.FC = props => {
    const [prefix, setPrefix] = useState("");
    return (
        <LoadData promise={S3NavigationController.get(prefix)}>
            {listBucketResult =>
                <ListBucketResultView listBucketResult={listBucketResult}
                    setPrefix={setPrefix}/>
            }
        </LoadData>
    )
}
export default PrefixNavigator;