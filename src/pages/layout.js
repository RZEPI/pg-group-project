import { Outlet, Link } from "react-router-dom";
import Logo from "../Components/components/Logo";


const Layout = () => {
    return (
        <>
            <header>
                <Logo />
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/level">Levels</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;