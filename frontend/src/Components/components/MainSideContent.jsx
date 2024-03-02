import BigLogo from "./BigLogo";
import MainButtonContainer from "./MainButtonContainer";

import "../styles/MainSideContent.css";

export default function MainSideContent() {
  return (
      <div className="main-side-container">
        <BigLogo />
        <h1>Zabawa Z Jednostkami</h1>
        <p>
          Gra stworzona przez studentów Politechniki Gdańskiej <br /> w celu
          pomocy dydaktycznej dla dzieci
        </p>

        <MainButtonContainer />
      </div>
  );
}
