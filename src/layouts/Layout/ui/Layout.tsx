import React, {memo} from "react";
import {Outlet} from "react-router-dom";
import {BrowserView, MobileView } from "react-device-detect";

import {SideBar} from "../../../widgets/SideBar";
import {Toolbar} from "../../../widgets/ToolBar";
import {Navbar} from "../../../widgets/Navbar";
import { classNames } from '../../../shared/helpers/classNames/classNames';

import classes from './Layout.module.scss'


export const Layout = memo(() => {
    return (
        <>
            <BrowserView className={classNames(classes.MainLayout, {}, [])}>
                <SideBar className={classes.sidebar}/>
                <div className={classes.content}>
                    <Outlet/>
                </div>
                <div className={classes.rightbar}>
                    <Toolbar/>
                </div>
            </BrowserView>

            <MobileView className={classes.contentMobile}>
                <Navbar />
                <Toolbar/>
                <Outlet/>
            </MobileView>
        </>
    );
});