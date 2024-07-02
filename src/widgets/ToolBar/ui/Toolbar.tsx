import React from 'react';
import {isMobile} from "react-device-detect";

import {SearchNavbar} from "../../../features/SearchNavbar/ui/SearchNavbar";
import {ExpandableFilters} from "../../../features/ExpandableFilters/ui/ExpandableFilters";
import {classNames} from "../../../shared/helpers/classNames/classNames";
import classes from './Toolbar.module.scss'

export const Toolbar = () => {
    return (
        <div className={classNames(classes.Toolbar, {[classes.mobile]: isMobile}, [])}>
                <SearchNavbar />
                <ExpandableFilters />
        </div>
    )
}