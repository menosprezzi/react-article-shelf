import React from 'react';
import classNames from 'classnames';

import './filter-bar.scss';

type FilterBarType = React.FC & {
    Item: React.FC<FilterItemProps>;
};

export interface FilterItemProps {
    active: boolean;
}

export const FilterBar: FilterBarType = (props: any) => {
    return (
        <div className="app-filter-bar" role="list">
            <label className="app-filter-bar__label">Filtre por</label>
            <div className="app-filter-bar__items" role="list">
                {props.children}
            </div>
        </div>
    );
};

FilterBar.Item = (props) => {
    return (
        <div
            role="listitem"
            className={classNames({
                'app-filter-item': true,
                'app-filter-item--active': props.active
            })}
        >
            {props.children}
        </div>
    );
};
