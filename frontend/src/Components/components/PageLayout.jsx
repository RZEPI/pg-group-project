import { Outlet } from "react-router-dom";

import Logo from "./Logo";
import { UserContextProvider } from "../store/user-context";

export default function PageLayout() {
    return (
        <>
            <Logo />
            <UserContextProvider>
                <Outlet />
            </UserContextProvider>
        </>
    )
}