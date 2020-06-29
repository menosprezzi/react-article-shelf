import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

import { AuthorsContext } from '@app/authors/providers/authors/authors.context';
import { Author } from '@app/authors/providers/authors/authors.types';

import { ArticlesContext } from '../../providers/articles/articles.context';
import { Article, ArticleFilters } from '../../providers/articles/articles.types';
import { FeedViewModel } from './feed.types';

export function useFeedController(): FeedViewModel {
    // Context Injection
    const articles = useContext(ArticlesContext);
    const authors = useContext(AuthorsContext);

    // Business & UseCases
    const [ articlesList, setArticlesList ] = useState<Article[]>();
    const [ authorsList, setAuthorsList ] = useState<Author[]>();
    const [ filters, setFilters ] = useState<ArticleFilters>({ authors: [] });
    const toggleAuthorFilter = useToggleAuthorFilter(setFilters);

    useEffect(() => {
       articles.listAll().then(setArticlesList);
       authors.listAll().then(setAuthorsList);
    }, [ articles, authors ]);

    useEffect(() => {
        setArticlesList(undefined);
        articles.list(filters).then(setArticlesList);
    }, [ articles, filters, setArticlesList ]);

    return { articlesList, authorsList, filters, toggleAuthorFilter };
}

export const useToggleAuthorFilter = (setFilter: Dispatch<SetStateAction<ArticleFilters>>) =>
    (id: number) => {
        setFilter(currFilters => {
            currFilters.authors = currFilters.authors || [];
            const index = currFilters.authors.indexOf(id);
            if (index > -1) {
                return {...currFilters, authors: currFilters.authors.filter(x => x !== id)};
            } else {
                return { ...currFilters, authors: [id, ...currFilters.authors]  };
            }
        });
    };
