import logo from '../../assets/logo.png';
import '../styles/Logo.css';

export default function Logo() {
    return(
        <div className="logo">
            <img src={logo} alt="logo" />     
        </div>
    )
}
