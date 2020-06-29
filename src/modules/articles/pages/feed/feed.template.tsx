import React from 'react';


import { count } from '@core/utils/collection';
import { FilterBar } from '@core/components/filter-bar/filter-bar';

import { PreviewCard } from '../../components/preview-card/preview-card';
import { FeedViewModel } from './feed.types';
import './feed.style.scss';
import { Dropdown } from "@core/components/dropdown/dropdown";

export const FeedTemplate: React.FC<FeedViewModel> = props => {
    return (
        <div className="app-articles-feed-page">
            <section className="app-container">
                <div className="app-page-header">
                    <h1>Seu Feed</h1>
                    <p>Artigos indicados para você.</p>
                    <FilterBar>
                        <Dropdown panel={
                            <Dropdown.Panel label="Filtrar por autores">
                                {props.authorsList?.map(author => (
                                    <label key={author.id}>
                                        <input
                                            type="checkbox"
                                            checked={props.filters.authors?.includes(author.id)}
                                            onChange={() => props.toggleAuthorFilter(author.id)} />
                                        {author.name}
                                    </label>
                                ))}
                            </Dropdown.Panel>
                        }>
                            <FilterBar.Item active={!!props.filters.authors?.length && props.filters.authors.length > 0}>
                                Autores
                            </FilterBar.Item>
                        </Dropdown>
                    </FilterBar>
                </div>
                <div>
                    {props.articlesList ?
                        props.articlesList
                            .map(article => <PreviewCard data={article} key={article.metadata.publishedAt} />)
                        : count(5).map(i => <PreviewCard key={i} />)
                    }
                </div>
            </section>
        </div>
    );
};
