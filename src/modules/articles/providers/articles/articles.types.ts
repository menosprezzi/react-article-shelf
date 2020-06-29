export interface Article {
    title: string;
    body: string;
    metadata: ArticleMetadata;
}

export interface ArticleMetadata {
    publishedAt: number;
    authorId: number;
}

export interface ArticleFilters {
    authors?: number[];
}
