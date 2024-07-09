import {motion} from "framer-motion";
import logo from "../../assets/logo.png";

export default function BigLogo() {
    return <motion.img whileHover={{rotate: 360}} transition={{duration: 0.5}} src={logo} alt="logo" />
}