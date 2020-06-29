import { Author } from '@app/authors/providers/authors/authors.types';

import { Article, ArticleFilters } from '../../providers/articles/articles.types';

export interface FeedViewModel {
    articlesList?: Article[];
    authorsList?: Author[];
    filters: ArticleFilters;
    toggleAuthorFilter(id: number): void;
}
