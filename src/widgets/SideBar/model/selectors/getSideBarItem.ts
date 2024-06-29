export type SideBarItemType = {
    label: string,
    iconPath?: string
    iconAlt?: "arrow-icon" | "search-icon"
    path: string
    subitems?: SideBarItemType[]
}
export function getSideBarItems (): Array<SideBarItemType> {
    return [
        {
            label: "Discover",
            iconPath: 'assets/icons/search-icon-yellow.png',
            iconAlt: 'search-icon',
            path: '/discover'
        },
        {
            label: "Watched",
            path: '/watched',
            subitems: [
                {label: 'Movies', path: '/watched/movies' },
                {label: "TV Shows", path: '/watched/shows'}
            ]
        },
        {
            label: "Saved",
            path: '/saved',
            subitems: [
                {label: 'Movies', path: '/saved/movies'},
                {label: "TV Shows", path: '/saved/shows'}
            ]
        },
    ]
}