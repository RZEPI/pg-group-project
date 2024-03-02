import MainButtonContainer from "./MainButtonContainer";
import  "../styles/MainSideContent.css";
import { useContext } from "react";
import UserContext from "../store/user-context";
import BigLogo from "./BigLogo";

export default function Results() {
    const {points, levelAmount} = useContext(UserContext);
    const maxPoints = levelAmount * 3;  

    let message = "";
    if(points === maxPoints)
    {
        message = "Gratulacje! Udało Ci się odpowiedzieć na wszystkie pytania poprawnie!";
    }else if(points / maxPoints > 0.75)
    {
        message = "Brawo! Udało Ci się odpowiedzieć na większość pytań poprawnie!";
    }else if(points / maxPoints > 0.5){
        message = "Nieźle! Udało Ci się odpowiedzieć na ponad połowę pytań poprawnie!";
    }else{
        message = "Przed tobą jeszcze trochę nauki. Spróbuj ponownie wciskając przycisk Zagraj od początku.";
    }
    return (<div className="main-side-container">
        <BigLogo />
        <h1>Twój wynik to:<br/>
            {`${points}/${maxPoints}`}</h1>
        <h2>{message}</h2>
        <MainButtonContainer isMainPage={false} />
    </div>);
}