import React, {useState} from "react";

import {Dropdown} from "../../../shared/UI/Dropdown/Dropdown";
import {Icon} from "../../../shared/UI/Icon/Icon";

import {useExpandableFilters} from "../model/hooks/useExpandableFilters";

import classes from "./ExpandableFilters.module.scss";

export const ExpandableFiltersMobile = () => {
    const {filterItems} = useExpandableFilters()
    const [open, setOpen] = useState(false)

    const trigger = (
        <Icon src='assets/icons/filter-icon.png' alt='humburger menu icon' />
    )

    return (
        <Dropdown
            className={classes.ExpandableFiltersMobile}
            customOpen={open}
            onTriggerClick={()=> setOpen(prev => !prev)}
            items={filterItems}
            trigger={trigger}
            direction='bottom'
        />
    )
}