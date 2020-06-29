import React from 'react';
import { renderHook, act, HookResult } from '@testing-library/react-hooks';

import { AuthorsMockProvider } from '@app/authors/providers/authors/authors.mock.provider';

import { useFeedController } from './feed.controller';
import { FeedViewModel } from './feed.types';
import { ArticlesMockProvider } from '../../providers/articles/articles.mock.provider';

describe('feed page controller', () => {
    let feedHook: HookResult<FeedViewModel>;
    let nextUpdate: () => Promise<any>;

    beforeEach(async () => {
        await act(async () => {
            const {result, waitForNextUpdate} = renderHook(() => useFeedController(), {
                wrapper: ({children}) => (
                    <AuthorsMockProvider>
                        <ArticlesMockProvider>
                            {children}
                        </ArticlesMockProvider>
                    </AuthorsMockProvider>
                )
            });
            feedHook = result;
            nextUpdate = waitForNextUpdate;
        });
    });

    it('should render', async () => {
        expect(feedHook).toBeTruthy();
    });

    it('should apply filters', async () => {
        await act(async () => {
            feedHook.current.toggleAuthorFilter(0);
            return nextUpdate();
        });
        expect(feedHook.current.articlesList?.filter(x => x.metadata.authorId !== 0)).toHaveLength(0);
    });
});
