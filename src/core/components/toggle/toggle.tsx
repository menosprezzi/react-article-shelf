import React, { ReactEventHandler } from 'react';

import './toggle.scss';

export interface ToggleProps {
    label?: string;
    checked: boolean;
    onToggle: ReactEventHandler;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onToggle, label, children }) => {
    return (
        <label
            className="app-toggle"
            role="checkbox"
            aria-checked={checked}
            aria-label={label}
        >
            <input type="checkbox"
                   className="app-toggle__native"
                   aria-hidden="true"
                   checked={checked}
                   onChange={onToggle}
            />
            <span className="app-toggle__bullet">
                {children}
            </span>
      </label>
    );
};
