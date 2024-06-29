import {Dropdown} from "../../../shared/UI/Dropdown/Dropdown";
import {Icon} from "../../../shared/UI/Icon/Icon";
import {getSideBarItems} from "../../SideBar/model/selectors/getSideBarItem";
import {useMemo, useState} from "react";
import {SideBarItem} from "../../SideBar/SideBarItem";
import {classNames} from "../../../shared/helpers/classNames";
import classes from "./Navbar.module.scss";
import {useLocation, useParams} from "react-router-dom";
import {AppRouterByPathPattern} from "../../../shared/consts/router";
import {HStack} from "../../../shared/UI/Stack";

export const Navbar = () => {
    const location = useLocation()
    const pageTitle = AppRouterByPathPattern[location.pathname];
    const trigger = (
        <Icon
            width='32px'
            height='32px'
            src='assets/icons/hamburger-menu.png'
            alt='hamburger menu icon'
        />
    )
    const sideBarItemsList = getSideBarItems()
    const [customOpen, setCustomOpen] = useState(false);

    const onToggle = () => {
        setCustomOpen((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item, index) => {
                return {
                    id: index,
                    content: (
                        <SideBarItem
                            key={item.label}
                            iconPath={item.iconPath}
                            iconAlt={item.iconAlt}
                            label={item.label}
                            subitems={item.subitems}
                            path={item.path}
                            onItemClick={onToggle}
                        />
                    ),

                }
            }),
        [sideBarItemsList],
    );


    return (
        <HStack className={classNames(classes.Navbar, {}, [])}>
            <Dropdown
                direction='bottom'
                customOpen={customOpen}
                items={itemsList}
                trigger={trigger}
                onTriggerClick={()=> setCustomOpen(prev => !prev)}
            />
            <h1 className={classes.pageTitle}>{pageTitle}</h1>
        </HStack>
    )
}