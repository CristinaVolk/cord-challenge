import React, {Fragment, ReactNode} from 'react';
import {Menu} from '@headlessui/react';

import classes from './Dropdown.module.scss';
import popupClasses from './popup.module.scss';
import {classNames} from "../../helpers/classNames/classNames";

type DropdownDirection =
    | 'top'
    | 'bottom'
    | 'topRight'
    | 'topLeft'
    | 'bottomLeft'
    | 'bottomRight';

interface DropdownItem {
    id: number;
    itemActive?: boolean;
    content?: ReactNode;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction: DropdownDirection;
    customOpen?: boolean;
    onTriggerClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom',
        customOpen,
        onTriggerClick,
    } = props;
    const menuClasses = [popupClasses[direction]];

    function buttonClicked() {
        onTriggerClick?.()
    }

    return (
        <Menu
            as="div"
            className={classNames(classes.Dropdown, {}, [
                className,
            ])}
        >
            <Menu.Button className={classes.btn}  onClick={buttonClicked}>
                {trigger}
            </Menu.Button>

            {customOpen && (
                <Menu.Items
                    static
                    className={classNames(classes.menu, {[classes.open]: customOpen}, [...menuClasses])}
                >
                        {items.map((item) => {
                            const content = ({ active }: { active: boolean }) => (
                                <div
                                    className={classNames(
                                        classes.menuNavLink,
                                        {[classes.active]: active},
                                        [],
                                    )}
                                >
                                    {item.content}
                                </div>
                            );

                            return (
                                <Menu.Item
                                    key={item.id}
                                    as={Fragment}
                                >
                                    {content}

                                </Menu.Item>
                            );
                        })}
                </Menu.Items>
            )}
        </Menu>
    );
};
