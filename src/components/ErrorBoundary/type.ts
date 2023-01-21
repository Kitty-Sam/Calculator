import { ReactNode } from 'react';

export interface ErrorBoundaryPropsType {
    children: ReactNode;
}
export interface ErrorBoundaryStateType {
    hasError: boolean;
}
