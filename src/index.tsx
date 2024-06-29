import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {StoreProvider} from "./app/providers/StoreProvider";
import {ErrorBoundary} from "./app/providers/ErrorBoundary";
import {appRouter} from "./app/providers/Router";

import './app/styles/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <RouterProvider router={appRouter} />
        </ErrorBoundary>
    </StoreProvider>
);
