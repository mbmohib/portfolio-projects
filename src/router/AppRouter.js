import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import Project from '../components/Project';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={ProjectList} exact={true} />
                <Route path="/project/:id" component={Project} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;