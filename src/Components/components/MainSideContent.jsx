import MainButtonContainer from "./MainButtonContainer";
import logo from "../../assets/logo.png"
import  "../styles/MainSideContent.css";

export default function MainSideContent() {
    return(
        <div className="main-side-content">
            <img src={logo} alt="logo" />     
            <h1>Zabawa Z Jednostkami</h1>
            <p>
                Gra stworzona przez studentów Politechniki Gdańskiej <br/> w celu pomocy dydaktycznej dla dzieci
            </p>
        
            <MainButtonContainer />
        </div>
    );
}