import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header'
import Footer from '../components/Footer'

const AppRouter = () => (
    <BrowserRouter>
        <div className="wrapper">
            <Header />
                <main>
                    <Switch>
                        <Route path="/" component={ProjectList} exact={true} />
                        {/* <Route path="/project/:id" component={Project} /> */}
                    </Switch>
                </main>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;