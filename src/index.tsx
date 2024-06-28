import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './app/App';
import {StoreProvider} from "./app/providers/storeProvider/ui/StoreProvider";
import {ErrorBoundary} from "./app/providers/ErrorBoundary/ui/ErrorBoundary";
import './shared/styles/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StoreProvider>
);
