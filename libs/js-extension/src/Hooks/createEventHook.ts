type EventHookCbFnType<T = unknown> = (param: T) => void | (() => void);
type EventHookOnType<T = unknown> = (cb: EventHookCbFnType<T>) => void;
type EventHookTriggerType<T = unknown> = (param: T) => void;

export interface EventHookInterface<T = unknown> {
    clearAll(): void;
    clear(fn: EventHookCbFnType<T>): void;
    on: EventHookOnType<T>;
    trigger: EventHookTriggerType<T>;
}

export const createEventHook = <T = unknown>(): EventHookInterface<T> => {
    const fns: Set<(param: T) => void> = new Set();

    return {
        clearAll() {
            fns.clear();
        },
        clear(fn) {
            fns.delete(fn);
        },
        on(fn) {
            fns.add(fn);
        },
        trigger(param) {
            Array.from(fns).forEach((fn) => fn(param));
        },
    };
};
