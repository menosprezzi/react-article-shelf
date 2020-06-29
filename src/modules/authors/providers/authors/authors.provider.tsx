import React, {useContext, useMemo} from 'react';

import { EnvContext, IEnvService } from '@core/providers/env/env.context';

import { IAuthorsService, AuthorsContext } from './authors.context';
import { Author } from './authors.types';

class AuthorsService implements IAuthorsService {
    constructor(
        private env: IEnvService,
    ) { }

    listAll(): Promise<Author[]> {
        return fetch(this.env.authorsApiUrl)
            .then(res => res.json());
    }
}

export const AuthorsProvider: React.FC = ({ children }) => {
    const env = useContext(EnvContext);
    const service = useMemo(() => new AuthorsService(env), [ env ]);
    return (
        <AuthorsContext.Provider value={service}>
            {children}
        </AuthorsContext.Provider>
    );
};
