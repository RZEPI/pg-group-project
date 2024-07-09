import { Outlet, useLocation } from "react-router-dom";

import Logo from "../Logo";
import ClassChoice from "../ClassChoice";
import { UserContextProvider } from "../../store/user-context";

export default function PageLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/level-choice";
    return (
        <>
            <UserContextProvider>
            {isHome && <ClassChoice />}
            <Logo />

            <Outlet />
            </UserContextProvider>
        </>
    )
}