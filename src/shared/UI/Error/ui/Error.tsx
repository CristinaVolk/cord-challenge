import React, { memo } from 'react';

import classes from './Error.module.scss';
import {VStack} from "../../Stack";

interface ErrorProps {
    className?: string;
    message?: string;
}

export const Error = memo((props: ErrorProps) => {
    const { className, message } = props
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
                <h2>Sorry, the error has occurred</h2>
                {message && <h2>message</h2>}
                <button className={classes.refresh} onClick={onRefresh}>
                    <h2>Refresh</h2>
                </button>
            </VStack>
        </section>
    );
});
