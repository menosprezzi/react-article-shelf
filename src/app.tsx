import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MainLayout } from '@core/components/main-layout/main-layout';
import { Spinner } from '@core/components/spinner/spinner';
import { EnvContext } from '@core/providers/env/env.context'

import './app.scss';

export function App() {
    return (
        <EnvContext.Provider value={{
            articlesApiUrl: process.env.REACT_APP_ARTICLES_API_URL || '',
            authorsApiUrl: process.env.REACT_APP_AUTHORS_API_URL || ''
        }}>
            <Router>
                <MainLayout appLogo={"Article Shelf"}>
                    <Suspense fallback={
                        <div className="app-container app-container--centered">
                            <Spinner />
                        </div>
                    }>
                        <Switch>
                            <Route path="/articles" component={lazy(() => import('@app/articles/articles.module'))} />
                            <Route path="/" component={() => <Redirect to="/articles" />} />
                        </Switch>
                    </Suspense>
                </MainLayout>
            </Router>
        </EnvContext.Provider>
    );
}
