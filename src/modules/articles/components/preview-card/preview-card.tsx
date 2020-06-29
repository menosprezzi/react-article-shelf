import React from 'react';


import { withLoadingState } from '@core/hocs/with-loading-state';

import { Article } from '../../providers/articles/articles.types';
import './preview-card.scss';

interface PreviewCardProps {
    data: Article;
}

const PreviewCardSkeleton = () => {
    return (
        <div className="app-articles-preview-card app-articles-preview-card--loading">
            <div className="app-articles-preview-card__title" />
            <div className="app-articles-preview-card__content">
                <div className="app-articles-preview-card__paragraph">
                    <div className="app-articles-preview-card__paragraph-line" />
                    <div className="app-articles-preview-card__paragraph-line" />
                    <div className="app-articles-preview-card__paragraph-line" />
                    <div className="app-articles-preview-card__paragraph-line" />
                    <div className="app-articles-preview-card__paragraph-line" />
                    <div className="app-articles-preview-card__paragraph-line" />
                </div>
                <div className="app-articles-preview-card__image-wrapper">
                    <div className="app-articles-preview-card__image" />
                </div>
            </div>
        </div>
    );
};

const PreviewCardComponent: React.FC<PreviewCardProps> = ({ data }) => {
    return (
        <article tabIndex={0} className="app-articles-preview-card">
            <h2 className="app-articles-preview-card__title">{data.title}</h2>
            <div className="app-articles-preview-card__content">
                <p className="app-articles-preview-card__paragraph">{data.body}</p>
                <div className="app-articles-preview-card__image-wrapper">
                    <div className="app-articles-preview-card__image" />
                </div>
            </div>
        </article>
    );
};

export const PreviewCard = withLoadingState({
    pendingPredicate: 'data',
    loadingComponent: PreviewCardSkeleton
})(PreviewCardComponent);
