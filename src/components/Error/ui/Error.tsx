import React, { memo } from 'react';

import classes from './Error.module.scss';
import {VStack} from "../../../shared/UI/Stack";

interface ErrorProps {
    className?: string;
}

export const Error = memo(({ className }: ErrorProps) => {
    const onRefresh = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <section>
            <VStack
                align='center'
                justify='center'
                className={classes.Error}
            >
                <button className={classes.refresh} onClick={onRefresh}>
                    <h2>Refresh</h2>
                </button>
            </VStack>
        </section>
    );
});
