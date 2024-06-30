import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import '../../../app/styles/index.scss';
import {StateSchema} from "../../../app/providers/StoreProvider";
import {StoreProvider} from "../../../app/providers/StoreProvider";

interface ComponentRenderOptions {
    route?: string;
    initialState?: StateSchema;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const { options = {}, children } = props;

    const {
        route = '/',
        initialState,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <div>{children}</div>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(
    component: ReactNode | any,
    options?: ComponentRenderOptions,
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
