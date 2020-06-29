import React from 'react';

export interface IEnvService {
    [key: string]: string;
}

export const EnvContext = React.createContext<IEnvService>(null as any);
