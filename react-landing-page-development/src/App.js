import './App.css';
import LogoPadrao from '../src/images/imagepadrao.jpg';
import PresentationImage from '../src/images/imagemapresentacao.jpg'

function LandingPageFunction() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <img src={LogoPadrao} alt="Logo" className="rounded-image" />
      </header>
      <div className="presentation-container">
        <div className="presentation-text">
          <div className="presentation-text-top">
            <h2>Olá eu sou</h2>
          </div>
          <div className="presentation-text-bottom">
            <p>Renata Oliveira</p>
          </div>
        </div>
        <div className="presentation-image">
        </div>
      </div>
    </div>
  );
}

export default LandingPageFunction;
