import {Layout} from "./Layout";
import {getRouteHome} from "../../../shared/consts/router";
import {componentRender} from "../../../shared/helpers/tests/componentRender";

test('landing on a bad page', () => {

   componentRender(<Layout />, {route: getRouteHome()})

    // @ts-ignore
    // expect(screen.getByText(/no match/i)).toBeInTheDocument()
})