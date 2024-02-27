import './App.css';
import LogoPadrao from '../src/images/imagepadrao.jpg';
import PresentationImage from '../src/images/imagemapresentacao.jpg'

function LandingPageFunction() {
  return (
    /* Começamos com a div da landing page ao todo */
    <div className="LandingPage">
      {/* Depois temos um header para determinar a barra na parte de cima do código */}
      <header className="LandingPage-header">
        {/* A logo no canto superior esquerdo dentro da barra (header) */}
        <img src={LogoPadrao} alt="Logo" className="rounded-image" />
      </header>

      {/* Temos um container inteiro para a apresentação que ficará na página logo no início */}
      <div className="presentation-container">
          {/* Bloco de código para os textos iniciais */}
          <div className="presentation-text">
            {/* Texto de cima */}
            <div className="presentation-text-top">
            <h2>Olá eu sou</h2>
            </div>
            {/* Texto debaixo */}
            <div className="presentation-text-bottom">
            <p>Renata Oliveira</p>
            </div>
          </div>
          {/* Container da imagem ao lado direito */}
          <div className="presentation-image">
            <img src={PresentationImage} alt="Foto Pessoal Renata Oliveira"className="personal-image"/>
          </div>
        </div>

        {/* Bloco na parte debaixo */}
        <div className="the-block">
          <div className="block-one">
            <div className="sub-block-one">
              <p>Sub-bloco 1</p>
            </div>
            <div className="sub-block-two">
              <p>Sub-bloco 2</p>
            </div>
            <div className="sub-block-three">
              <p>Sub-bloco 3</p>
            </div>
          </div>
          <div className="block-two">
            <div className="sub-block-one">
              <p>Sub-bloco 1</p>
            </div>
            <div className="sub-block-two">
              <p>Sub-bloco 2</p>
            </div>
            <div className="sub-block-three">
              <p>Sub-bloco 3</p>
            </div>
          </div>
        </div>

        {/* Bloco faixa após apresentação */}
        <div className="information-banner">
          <div className="information-banner-text">
            <p>Banner Texto</p>
          </div>
          <div className="information-banner-blocks">
            <div className="information-banner-block-one">
              <div className="information-banner-sub-block-one">
                <p> subbloco 1</p>
              </div>
            </div>
            <div className="information-banner-block-two">
              <div className="information-banner-sub-block-two">
                <p> subbloco 2</p>
              </div>
            </div>
            <div className="information-banner-block-three">
              <div className="information-banner-sub-block-three">
                <p> subbloco 3</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPageFunction;
