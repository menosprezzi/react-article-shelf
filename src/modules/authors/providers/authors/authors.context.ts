import React from 'react';

import { Author } from '@app/authors/providers/authors/authors.types';

export interface IAuthorsService {
    listAll(): Promise<Author[]>
}

export const AuthorsContext = React.createContext<IAuthorsService>(null as any);
