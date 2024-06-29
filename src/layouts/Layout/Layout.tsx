import { memo } from 'react';
import classes from './Layout.module.scss'
import { classNames } from '../../shared/helpers/classNames';
import {Outlet} from "react-router-dom";
import {SideBar} from "../../widgets/SideBar/SideBar";
import {Toolbar} from "../../widgets/ToolBar/ui/Toolbar";
import {BrowserView, MobileView } from "react-device-detect";
import {Navbar} from "../../widgets/Navbar/ui/Navbar";


export const Layout = memo(() => {
    return (
        <>
            <BrowserView>
                <div className={classNames(classes.MainLayout, {}, [])}>
                    <SideBar className={classes.sidebar}/>
                    <div className={classes.content}>
                        <Outlet/>
                    </div>
                    <div className={classes.rightbar}>
                        <Toolbar/>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
                <div className={classes.contentMobile}>
                    <Navbar />
                    <Toolbar/>
                    <Outlet/>
                </div>
            </MobileView>
        </>
    );
});