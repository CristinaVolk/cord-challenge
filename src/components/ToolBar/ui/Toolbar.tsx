import {BrowserView, MobileView} from "react-device-detect";
import {SearchNavbar} from "../../SearchNavbar/ui/SearchNavbar";
import {ExpandableFilters} from "../../ExpandableFilters/ui/ExpandableFilters";
import {HStack} from "../../../shared/UI/Stack";


export const Toolbar = () => {

    return (
        <>
            <BrowserView>
                <SearchNavbar />
                <ExpandableFilters />
            </BrowserView>

            <MobileView>
                <HStack>
                    <SearchNavbar />
                    <ExpandableFilters />
                </HStack>
            </MobileView>
        </>
    )
}