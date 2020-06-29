import React, {ReactElement, useEffect} from 'react';
import { useToggle } from 'react-use';

import { Toggle } from '../toggle/toggle';
import './main-layout.scss';

export interface MainLayoutProps {
    appLogo: ReactElement | string;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const [ isDarkTheme, toggleDarkTheme ] = useToggle(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        document.documentElement
            .setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [ isDarkTheme ]);

    return (
        <div className="app-main-layout">
            <div className="app-main-layout__header">
                <div className="app-container">
                    <div className="app-main-layout__header-inner-content">
                        <div className="app-font--bold app-text--primary">{props.appLogo}</div>
                        <div className="app-main-layout__actions">
                            <Toggle checked={isDarkTheme} onToggle={toggleDarkTheme}>
                                { isDarkTheme ? <i className="fas fa-moon" /> : <i className="fas fa-sun" /> }
                            </Toggle>
                        </div>
                    </div>
                </div>
            </div>
            <main className="app-main-layout__content">
                {props.children}
            </main>
        </div>
    );
};
