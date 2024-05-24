import { Outlet, useLocation } from "react-router-dom";

import Logo from "../Logo";
import { UserContextProvider } from "../../store/user-context";
import ClassChoice from "../ClassChoice";

export default function PageLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/level-choice";
    return (
        <>
            {isHome && <ClassChoice />}
            <Logo />
            <UserContextProvider>
                <Outlet />
            </UserContextProvider>
        </>
    )
}