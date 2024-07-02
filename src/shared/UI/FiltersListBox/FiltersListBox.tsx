import React from 'react';

import {classNames} from "../../helpers/classNames/classNames";
import classes from "./FiltersListBox.module.scss";

import {VStack} from "../Stack";
import {useState} from "react";

interface FiltersListBoxProps {
    listBoxTitle: string
    listBoxItems: Array<JSX.Element>
}

export const FiltersListBox = (props: FiltersListBoxProps) => {
    const {listBoxTitle, listBoxItems} = props
    const [isOpen, setOpen] = useState(false)

    return (
        <section className={classNames(classes.FiltersListBox, {[classes.open]:isOpen}, [])}>
            <button className={classes.trigger} onClick={() => setOpen(prev => !prev)}>
                <h4 className={
                    classNames(classes.title, {
                        [classes.collapsed]: isOpen
                    }, [])
                }>{listBoxTitle}</h4>
            </button>
            {isOpen &&
                <VStack
                    gap='10'
                    className={
                        classNames(classes.list, {
                            [classes.open]: isOpen
                        }, [])
                    }
                >
                    {listBoxItems.map((content: JSX.Element, index: number) => (
                        <li key={index} value={index}>
                            {content}
                        </li>
                    ))}
                </VStack>
            }
        </section>
    )
}