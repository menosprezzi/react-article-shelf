import React, { useContext, useMemo } from 'react';

import { EnvContext, IEnvService } from '@core/providers/env/env.context';

import { IArticlesService, ArticlesContext } from './articles.context';
import { Article, ArticleFilters } from '@app/articles/providers/articles/articles.types';

class ArticlesMockService implements IArticlesService {
    constructor(
        private env: IEnvService,
    ) { }

    listAll(): Promise<Article[]> {
        return import('./mocks/get-list-all.json');
    }

    list(filters: ArticleFilters = {}): Promise<Article[]> {
        // Fake filter api
        return import('./mocks/get-list-all.json')
            .then(m => m.default)
            .then(articles => articles.filter((article: Article) =>
                filters.authors?.length === 0 || filters.authors?.includes(article.metadata.authorId)
            ));
    }
}

export const ArticlesMockProvider: React.FC = ({ children }) => {
    const env = useContext(EnvContext);
    const service = useMemo(() => new ArticlesMockService(env), [ env ]);

    return (
        <ArticlesContext.Provider value={service}>
            {children}
        </ArticlesContext.Provider>
    );
};
