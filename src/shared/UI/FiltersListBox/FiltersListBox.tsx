import {useState} from "react";
import {classNames} from "../../helpers/classNames";
import classes from "./FiltersListBox.module.scss";
import {VStack} from "../Stack";

interface FiltersListBoxProps {
    listBoxTitle: string
    listBoxItems: Array<JSX.Element>
}

export const FiltersListBox = (props: FiltersListBoxProps) => {
    const {listBoxTitle, listBoxItems} = props
    const [isOpen, setIsOpen] = useState(false);
    const onListboxButtonClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <section className={classNames(classes.FiltersListBox, {}, [])}>
            <button className={classes.trigger} onClick={onListboxButtonClick}>
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
                        <li
                            className={
                                classNames(classes.item, {
                                    [classes.open]: isOpen
                                }, [])
                            }
                            key={index}
                            value={index}
                        >
                            {content}
                        </li>
                    ))}
                </VStack>
            }
        </section>
    )
}