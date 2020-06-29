import React, { lazy } from 'react';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';

import { AuthorsProvider } from '@app/authors/providers/authors/authors.provider';

import { ArticlesProvider } from './providers/articles/articles.provider';

const ArticlesModule: React.FC = () => {
    let { path } = useRouteMatch();

    return (
        <AuthorsProvider>
            <ArticlesProvider>
                <Switch>
                    <Route path={path + '/feed'} component={lazy(() => import('./pages/feed/feed.page'))} />
                    <Route path={path} component={() => <Redirect to={path + '/feed'} />} />
                </Switch>
            </ArticlesProvider>
        </AuthorsProvider>
    );
};

export default ArticlesModule;
