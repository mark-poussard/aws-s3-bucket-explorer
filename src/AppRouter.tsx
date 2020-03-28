import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter : React.FC = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <DebugScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter;