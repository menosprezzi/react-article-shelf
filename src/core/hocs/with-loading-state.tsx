import React from 'react';

export interface WithLoadingStateParams<P> {
    pendingPredicate: keyof P,
    loadingComponent: React.FC<P | any> | React.ComponentClass<P | any>
}

export type WithLoadingStateComponentProps<P> = Partial<P> & { loadingState?: boolean }

export function withLoadingState<P>(params: WithLoadingStateParams<P>) {
    const { pendingPredicate, loadingComponent: LoadingComponent } = params;
    return (Component: React.FC<P> | React.ComponentClass<P>) =>
        function WithLoadingState(props: WithLoadingStateComponentProps<P>) {
            return props.loadingState || !props[pendingPredicate] ?
                <LoadingComponent {...props} />
                : <Component {...props as any} />;
        } as React.FC<WithLoadingStateComponentProps<P>>
}
