import { createContext } from 'react';

export const HistoryContext = createContext<{
    history: string[];
    setHistory: (newValue: string[]) => void;
}>({
    history: [],
    setHistory: () => undefined,
});
