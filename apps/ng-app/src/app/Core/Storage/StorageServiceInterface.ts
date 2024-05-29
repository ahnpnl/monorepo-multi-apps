export interface StorageServiceInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setItem: (key: string, value: any) => void;
    getItem: <T>(key: string) => T | null;
    removeItem: (key: string) => void;
}
