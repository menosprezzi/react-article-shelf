import React from 'react';
import { Article, ArticleFilters } from '@app/articles/providers/articles/articles.types';


export interface IArticlesService {
    listAll(): Promise<Article[]>;

    list(filters: ArticleFilters): Promise<Article[]>;
}

export const ArticlesContext = React.createContext<IArticlesService>(null as any);
