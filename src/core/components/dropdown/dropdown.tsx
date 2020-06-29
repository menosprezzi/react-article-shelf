import React, {ReactElement} from 'react';
import { useToggle } from 'react-use';


import './dropdown.scss';

type DropdownType = React.FC<DropdownProps> & {
    Panel: React.FC<PanelProps>;
};

export interface DropdownProps {
    panel: ReactElement
}

export interface PanelProps {
    label: string
}

export const Dropdown: DropdownType = (props: any) => {
    const [ isOpen, toggle ] = useToggle(false);
    return (
        <div className="app-dropdown">
            <button
                className="app-dropdown__native"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={toggle}
            >
                {props.children}
            </button>
            {isOpen && props.panel}
        </div>
    );
};

Dropdown.Panel = (props: any) => {
    return (
        <div className="app-panel" role="listbox" aria-label={props.label}>
            {props.children}
        </div>
    );
};
