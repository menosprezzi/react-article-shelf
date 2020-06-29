import React, {useContext, useMemo} from 'react';

import { EnvContext, IEnvService } from '@core/providers/env/env.context';

import { IArticlesService, ArticlesContext } from './articles.context';
import { Article, ArticleFilters } from '@app/articles/providers/articles/articles.types';

class ArticlesService implements IArticlesService {
    constructor(
        private env: IEnvService,
    ) { }

    listAll(): Promise<Article[]> {
        return fetch(this.env.articlesApiUrl)
            .then(res => res.json());
    }

    list(filters: ArticleFilters = {}): Promise<Article[]> {
        // Fake filter api
        return fetch(this.env.articlesApiUrl)
            .then(res => res.json())
            .then(articles => articles.filter((article: Article) =>
                filters.authors?.length === 0 || filters.authors?.includes(article.metadata.authorId)
            ));
    }
}

export const ArticlesProvider: React.FC = ({ children }) => {
    const env = useContext(EnvContext);
    const service = useMemo(() => new ArticlesService(env), [ env ]);

    return (
        <ArticlesContext.Provider value={service}>
            {children}
        </ArticlesContext.Provider>
    );
};
