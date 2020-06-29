import React from 'react';


import './spinner.scss';

export const Spinner: React.FC = () => {
    return (
        <i className="fas fa-circle-notch fa-2x fa-spin app-spinner" />
    );
};
