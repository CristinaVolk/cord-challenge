import {classNames} from "../../shared/helpers/classNames";
import classes from "./SideBar.module.scss";
import {useMemo, useState} from "react";
import {SideBarItem} from "./SideBarItem";
import {getSideBarItems} from "./model/selectors/getSideBarItem";
import {Dropdown} from "../../shared/UI/Dropdown/Dropdown";
import {Icon} from "../../shared/UI/Icon/Icon";
import {HStack} from "../../shared/UI/Stack";

interface SideBarProps {
    className?: string | undefined
}

export function SideBar(props: SideBarProps) {
    const {className} = props
    const [customOpen, setCustomOpen] = useState(false);

    const onToggle = () => {
        setCustomOpen((prevState) => !prevState);
    };
    const sideBarItemsList = getSideBarItems()

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item, index) => {
                return {
                    id: index,
                    content: (
                        <SideBarItem
                            key={item.label}
                            path={item.path}
                            label={item.label}
                            iconAlt={item.iconAlt}
                            iconPath={item.iconPath}
                            subitems={item.subitems}
                        />
                    ),

                }
            }),
        [sideBarItemsList],
    );


    return (
        <aside className={classNames(
            classes.SideBar,
            {},
            [className],
        )}>
                <Dropdown
                    trigger={
                        <HStack
                            gap='5'
                            align='center'
                            justify='between'
                            className={classes.trigger}
                        >
                            <h1>Wesley</h1>
                            <Icon
                                width={24}
                                height={16}
                                className={
                                    classNames(
                                        classes.triggerIcon,
                                        { [classes.collapsed]: customOpen }
                                        ,[])
                                }
                                src='assets/icons/arrow-icon.png'
                                alt="trigger-arrow-icon"
                            />
                        </HStack>
                    }
                    items={itemsList}
                    direction={"bottom"}
                    customOpen={customOpen}
                    onTriggerClick={onToggle}
                />
        </aside>
    );
}