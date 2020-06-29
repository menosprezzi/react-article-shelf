import React, { useContext, useMemo } from 'react';

import { EnvContext, IEnvService } from '@core/providers/env/env.context';

import { IAuthorsService, AuthorsContext } from './authors.context';
import { Author } from './authors.types';

class AuthorsMockService implements IAuthorsService {
    constructor(
        private env: IEnvService,
    ) { }

    listAll(): Promise<Author[]> {
        return import('./mocks/get-list-all.json')
            .then(m => m.default);
    }
}

export const AuthorsMockProvider: React.FC = ({ children }) => {
    const env = useContext(EnvContext);
    const service = useMemo(() => new AuthorsMockService(env), [ env ]);
    return (
        <AuthorsContext.Provider value={service}>
            {children}
        </AuthorsContext.Provider>
    );
};
