import React from 'react';


import { useFeedController } from './feed.controller';
import { FeedTemplate } from '@app/articles/pages/feed/feed.template';

export const FeedPage: React.FC = () => {
    const viewModel = useFeedController();
    return <FeedTemplate {...viewModel} />;
};


export default FeedPage;
