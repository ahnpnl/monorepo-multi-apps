import * as matchers from "@testing-library/jest-dom/matchers";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Vi {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention
        interface JestAssertion<T = any> extends jest.Matchers<void, T>, matchers.TestingLibraryMatchers<T, void> {}
    }
}

expect.extend(matchers);
