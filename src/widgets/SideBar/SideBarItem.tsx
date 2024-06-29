import {Icon} from "../../shared/UI/Icon/Icon";
import {classNames} from "../../shared/helpers/classNames";
import classes from "./SideBar.module.scss";
import {SideBarItemType} from "./model/selectors/getSideBarItem";
import {Link} from "react-router-dom";

interface SideBarItemProps {
    className?: string
    iconPath?: string
    iconAlt?: string
    label: string,
    path: string,
    subitems?: SideBarItemType[],
    onItemClick?: () => void,
}

export const SideBarItem = (props: SideBarItemProps) => {
    const {
        className,
        label,
        iconPath,
        iconAlt,
        path,
        onItemClick,
        subitems
    } = props

    return (
        <>
            <Link
                to={path}
                className={classNames(classes.SideBarItem, {}, [className])}
                onClick={onItemClick}
            >
            <h3>{label}</h3>
                {iconPath &&
                    <Icon
                        width={24}
                        height={24}
                        src={iconPath}
                        alt={iconAlt}
                    />
                }
            </Link>
            {subitems?.length && <hr/>}
            {subitems?.length && subitems
                .map(subitem =>
                    <SideBarItem
                        key={subitem.label}
                        className={classes.subitem}
                        label={subitem.label}
                        path={subitem.path}
                    />
                )}
        </>

    )
}