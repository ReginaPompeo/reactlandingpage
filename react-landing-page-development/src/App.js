import React, { useRef, useState, useLayoutEffect, Motion } from 'react';
import './App.css';
import LogoPadrao from '../src/images/LogoPadrao.jpeg';
import PresentationImage from '../src/images/FotoPessoal.jpg';
import ImagemWhatsApp from '../src/images/LogoWhatsApp.png';
import ImagemInstagram from '../src/images/Icone-Instagram.png';
import IconeWhatsApp from '../src/images/Icone-WhatsApp.png';
import IconeLinkedin from '../src/images/Icone-Linkedin.png';
import IconeFaculdade from '../src/images/Faculdade.png';
import IconeBalanca from '../src/images/Balanca.png';
import IconeCursos from '../src/images/Livro.png';
import Apostrofo from '../src/images/apostrofo.png';
import emailjs from '@emailjs/browser';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function LandingPageFunction() {

  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
  document.head.appendChild(linkElement);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to([".presentation-text", ".presentation-image"], {
        x: 0,
        opacity: 1,
        duration: 2, // Define a duração da animação como 2 segundos
    });

    return () => {
        gsap.killTweensOf([".presentation-container"])
    }
}, []);


  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const sendEmail = (e) => {
 
    e.preventDefault();

    emailjs
      .sendForm('service_unxaqsf', 'template_bfa6616', form.current, {
        publicKey: 'TvM_YqZ3Kuup5VN1V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Esvaziar os campos do formulário após o envio bem-sucedido
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
          <div className="blocks">
            <div className="block-one">
            <div className="sub-block-one">
              <p>5</p>
            </div>
            <div className="sub-block-two">
              <p>ANOS ADVOGANDO</p>
            </div>
            <div className="sub-block-three">
              <p>
              São anos dedicados a ajudar pessoas na busca pela justiça.
              </p>
            </div>
          </div>
          </div>
          <div className="blocks">
            <div className="block-two">
            <div className="sub-block-one">
              <p>+10</p>
            </div>
            <div className="sub-block-two">
              <p>ANOS DE EXPERIÊNCIA</p>
            </div>
            <div className="sub-block-three">
              <p>
              Com experiência de uma década em gestão administrativa e 
              integração estratégica de processos jurídicos
              </p>
            </div>
            </div>  
          </div>
        </div>

        {/* Bloco faixa após apresentação */}
        <div className="information-banner">
          <div className="information-banner-text">
            <p>Áreas de Atuação</p>
          </div>
          <div className="information-banner-blocks">
            <div className="information-banner-block-one">
              <div className="information-banner-title">
                <p>Pessoa física e jurídica</p>
              </div>
              <div className="information-banner-block-text">
                <p>
                Com expertise em defender tanto pessoas físicas quanto jurídicas, 
                trago comprometimento e habilidade para garantir os direitos e 
                interesses dos meus clientes perante a justiça.
                </p>
              </div>
            </div>
            <div className="information-banner-block-two">
              <div className="information-banner-title">
                <p>Cível e Criminal</p>
              </div>
              <div className="information-banner-block-text">
                <p>
                Com vasta experiência na defesa tanto em questões cíveis quanto 
                criminais, estou preparado para oferecer suporte jurídico eficaz e 
                estratégico em todas as etapas do processo legal, 
                garantindo os melhores resultados para meus clientes.
                </p>
              </div>
            </div>
            <div className="information-banner-block-three">
              <div className="information-banner-title">
                <p>Direito do Consumidor</p>
              </div>
              <div className="information-banner-block-text">
                <p>
                Com foco no cliente e conhecimento abrangente em direito do, 
                estou preparado para defender seus direitos e garantir uma 
                resolução justa em qualquer questão relacionada ao consumo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco sobre o o profissional */}
        <div className="about-me-container">
          <div className="about-me-section">
            <p>UM POUCO SOBRE MIM</p>
          </div>
          <div className="about-me-title">
            <p>Quem sou eu?</p>
          </div>
          <div className="about-me-text">
            <p>
              Profissional com sólida formação em Gestão de Políticas Públicas e Direito, 
              combinada com uma vasta experiência de dez anos atuando na área administrativa. 
              Como Advogada, tenho me dedicado nos últimos cinco anos à integração de gestão estratégica 
              e processos jurídicos, com foco especializado em direito cível, trabalhista e mediação de 
              conflitos.
              Minha trajetória inclui uma atuação robusta em escritório contencioso de massa, onde 
              desenvolvi competências práticas na elaboração de peças processuais, contratos, e na 
              condução de negociações pré-processuais. Além disso, tenho expertise em atos societários e 
              estudos de teses, garantindo uma atuação abrangente e eficaz em diversas frentes do direito.
              Meu compromisso com a justiça vai além do âmbito profissional. Engajo-me ativamente em 
              causas sociais, como o trabalho voluntário com mulheres em situação de violência doméstica, 
              por meio da ONG 'As Justiceiras'. Este projeto reflete minha missão enquanto advogada: 
              disseminar informações para que as pessoas possam tomar decisões conscientes e acessar a 
              justiça de forma equitativa."
              </p>
          </div>
          <div className="about-me-blocks">
            <div className="about-me-block-one">
              <img src={IconeFaculdade} alt="Ícone de Good Ware" className="imagem-faculdade" href="https://br.freepik.com/search"/>
              <p className="title">Graduação</p>
              <p className="name-information">Direito</p>
              <p className="subtitle">Centro Universitário FMU</p>
              <p className="duration">2015 - 2019</p>
            </div>
            <div className="about-me-block-two">
              <img src={IconeCursos} alt="Icon by Freepik" className="imagem-pos-graduacao" href="https://www.freepik.com/icon/open-book_2702134#fromView=search&page=1&position=0&uuid=eabae85a-d63e-4eab-aef5-3b1574d98550"/>
              <p>Pós-Graduação</p>
              <p className="title">Mestrado</p>
              <p className="name-information">Resolução de Conflitos <br/>e Mediação</p>
              <p className="subtitle">Fundação Universitária <br/> Iberoamericana - FUNIBER</p>
              <p className="duration">2020 - 2023</p>
            </div>
            <div className="about-me-block-three">
              <img src={IconeBalanca} alt="Ícone de Freepik" className="imagem-cursos" href="https://br.freepik.com/search"/>
              <p>Profissão</p>
              <p className="title">Exercendo atualmente</p>
              <p className="name-information">Advogada autônoma - <br/>Renata Oliveira Advocacia</p>
              <p className="subtitle">Gerente Juírdico - <br/>Kurama Serviços e <br/>Transportes Ltda. </p>
              <p className="duration">Advogada - <br/>Febrapo</p>
            </div>
          </div>
        </div>

        {/* Bloco informativo */}        
        <div className="second-information-banner">
            <div className="second-information-banner-title">
              <p>VALORES E MISSÃO</p>
            </div>
            <div className="seconde-information-banner-mission">
              <p>"Disseminar informação para que as pessoas tenham a possibilidade de tomar escolhas conscientes."</p>
          </div>
        </div>
        
         {/*Bloco de opiniões de clientes */}
        <div className="customers-say-container">
          <div className="customers-say-title">
            <p>O que os clientes dizem</p>
          </div>
          <div className="customers-say-blocks">
            <div className="customers-block">
            <img src={Apostrofo} width="30px" alt="Icon by Icon Mela" className="imagem-apostrofo" href="https://www.freepik.com/icon/quote_7350737#fromView=search&page=1&position=1&uuid=f443d4c8-1302-4ad6-a68f-4a0061b221c7"/>
              <p>
                A Dra Renata é extremamente profissional, atenciosa, interessada na resolução dos assuntos, 
                sempre preocupada com o melhor para seus clientes, se empenhando ao máximo em cada detalhe. 
                Uma defensora de confiança, que fez a diferença em minha vida.
              </p>
              <div className="customers-name">
                <p>- Suely</p>
              </div>
            </div>
            <div className="customers-block">
            <img src={Apostrofo} width="30px" alt="Icon by Icon Mela" className="imagem-apostrofo" href="https://www.freepik.com/icon/quote_7350737#fromView=search&page=1&position=1&uuid=f443d4c8-1302-4ad6-a68f-4a0061b221c7"/>
              <p>
                Ótima experiência.<br/>
                Advogado muito competente, atencioso e totalmente qualificado para solucionar meu problema. 
                Você agora é meu contato de emergência!
              </p>
              <div className="customers-name">
                <p>- Luan</p>
              </div>
            </div>
            <div className="customers-block">
            <img src={Apostrofo} width="30px" alt="Icon by Icon Mela" className="imagem-apostrofo" href="https://www.freepik.com/icon/quote_7350737#fromView=search&page=1&position=1&uuid=f443d4c8-1302-4ad6-a68f-4a0061b221c7"/>
              <p>
                Pontualmente comprometido com o cliente. Sempre recomendo de olhos fechados.
              </p>
              <div className="customers-name">
                <p>- Cynthia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco para entrar em contato */}
        <div className="contact-container">
  <div className="contact-information">
    <div className="contact-top">
      <p>ENTRE EM CONTATO</p>
    </div>
    <div className="contact-group">
      <div className="contact-title">
        <p>TELEFONE</p>
      </div>
      <div className="contact-text">
        <p>55 (11) 98231-2948</p>
      </div>
    </div>
    <div className="contact-group">
      <div className="contact-title">
        <p>EMAIL</p>
      </div>
      <div className="contact-text">
        <p>reoliveirarufino@adv.oabsp.org.br</p>
      </div>
    </div>
  </div>
          <div className="contact-fields">
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-group">
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nome" />
    </div>
    <div className="form-group">
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
    </div>
    <div className="form-group">
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Mensagem"></textarea>
    </div>
    <button type="submit">Enviar</button>
  </form>
</div>

        </div>
        <div className="footer">
          <div className="social-medias">
              <img src={ImagemInstagram} width="30px" alt="Fale conosco pelo Instagram (Ícone de Pixel perfect)" title="" href="https://www.instagram.com/advocaciarenataoliveira/" target="_blank"/>
             {/* Icone Instagram -> <a href="https://br.freepik.com/icone/instagram_2111463#fromView=search&page=1&position=0&uuid=eb408666-e14b-4187-b7d9-387f6febfb97">Ícone de Pixel perfect</a>*/}
              <img src={IconeWhatsApp} width="30px" alt="Fale conosco pelo WhatsApp (Ícone de Grafixpoint)" title="" href="https://wa.me/5511982312948?text=Olá! Gostaria de saber mais informações." target="_blank"/>
              {/* Icone WhatsApp -> <a href="https://br.freepik.com/icone/social_13051741#fromView=search&page=1&position=21&uuid=b877d762-ab84-4e2d-ab56-feae75f8c88c">Ícone de Grafixpoint</a>*/}
              <img src={IconeLinkedin} width="30px" alt="Conheça meu Linkedin (Ícone de riajulislam)" title="" href="https://www.linkedin.com/in/reoliveirarufino/" target="_blank"/>
             {/* Icone Linkedin -> <a href="https://br.freepik.com/icone/linkedin_3536505#fromView=search&page=1&position=11&uuid=1f1bd414-5037-46a8-8ee5-a1a9328815d4">Ícone de riajulislam</a>*/}
          </div>
          <p>&copy; 2024 Advogada Renata Oliveira. <br/>Todos os direitos reservados a Regina Pompeo.</p>
          <p>Ícones by Freepik</p>
        </div>

        <div className="WhatsApp">
          <a href="https://wa.me/5511982312948?text=Olá! Gostaria de saber mais informações." target="_blank">
          <img src={ImagemWhatsApp} width="45px" alt="Fale conosco pelo WhatsApp (Ícone de Fathema Khanom)" title=""/>
          {/* <a href="https://br.freepik.com/icone/whatsapp_3670051#fromView=search&page=1&position=0&uuid=81b074a2-483d-431e-a61c-70f67708697f">Ícone de Fathema Khanom</a>*/}
          </a>
        </div>
  </div>
 
  );
}

export default LandingPageFunction;
