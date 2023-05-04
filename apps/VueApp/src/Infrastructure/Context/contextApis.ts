import { inject, provide, type InjectionKey } from 'vue';

export const createContextId = <TContext extends object = object>(contextName: string): InjectionKey<TContext> =>
    Symbol(contextName);

export const useContextProvider = <TContext extends object = object>(
    contextId: InjectionKey<TContext>,
    initialValue: TContext,
): void => provide(contextId, initialValue);

export const useContext = <TContext extends object = object>(contextId: InjectionKey<TContext>) =>
    inject(contextId) as TContext;
