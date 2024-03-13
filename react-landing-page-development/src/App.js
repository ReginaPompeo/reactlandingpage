import React, { useRef, useState, useLayoutEffect } from 'react';
import './App.css';
import LogoPadrao from '../src/images/imagepadrao.jpg';
import PresentationImage from '../src/images/imagemapresentacao.jpg';
import ImagemWhatsApp from '../src/images/WhatsApp-Icon.png';
import ImagemInstagram from '../src/images/Instagram-Icone.png';
import emailjs from '@emailjs/browser';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function LandingPageFunction() {

  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to([".presentation-text", ".presentation-image"], {
        x: 0,
        opacity: 1,
    });

    return () => {
        gsap.killTweensOf([".presentation-container"])
    }
}, []);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
      })
    }, el)

    return () => {
      gsap.killTweensOf(".customers-say-container")
    }

  }, [])


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
      .sendForm('gina.celia.pompeo', 'template_bfa6616', form.current, {
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
            <div className="sub-block-one">
              <p>10</p>
            </div>
            <div className="sub-block-two">
              <p>ANOS DE OAB</p>
            </div>
            <div className="sub-block-three">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="blocks">
            <div className="sub-block-one">
              <p>+100</p>
            </div>
            <div className="sub-block-two">
              <p>CLIENTES ATENDIDOS</p>
            </div>
            <div className="sub-block-three">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s.
              </p>
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

        {/* Bloco sobre o o profissional */}
        <div className="about-me-container">
          <p>Um pouco sobre mim</p>
          <div className="about-me-title">
            <p>Quem sou eu?</p>
          </div>
          <div className="about-me-text">
            <p>Lorem ipsum .........................</p>
          </div>
          <div className="about-me-blocks">
            <div className="about-me-block-one">
              <p>frame 1</p>
            </div>
            <div className="about-me-block-two">
              <p>frame 2</p>
            </div>
            <div className="about-me-block-three">
                <p>frame 3</p>
            </div>
          </div>
        </div>

        {/* Bloco informativo */}        
        <div className="second-information-banner">
          <div className="second-information-banner-text">
            <p>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</p>
          </div>
        </div>

        {/* Bloco de opiniões de clientes */}
        <div className="customers-say-container">
          <div className="customers-say-title">
            <p>O que os clientes dizem</p>
          </div>
          <div className="customers-say-blocks" ref={el}>
            <div className="customers-block">
              <p>bloco um</p>
            </div>
            <div className="customers-block">
              <p>bloco dois</p>
            </div>
            <div className="customers-block">
              <p>bloco tres</p>
            </div>
          </div>
        </div>  

        {/* Bloco para entrar em contato */}
        <div className="contact-container">
          <div className="contact-information">
            <p>ENTRE EM CONTATO</p>
            <div className="contact-title">
              <p>TELEFONE</p>
            </div>
            <div className="contact-text">
              <p>TEL: 119999999999</p>
            </div>
            <div className="contact-title">
              <p>EMAIL</p>
            </div>
            <div className="contact-text">
              <p></p>
            </div>
          </div>
          <div className="contact-fields">
          <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="social-medias">
            <a href="instagram.com/giinapompeo" target="_blank">
              <img src={ImagemInstagram} width="50px" alt="Fale conosco pelo Instagram" title=""/>
            </a>
          </div>
          <p>Desenvolvido por Regina Pompeo</p>
        </div>

        <div className="WhatsApp">
          <a href="https://wa.me/5511945292874?text=Olá! Gostaria de saber mais informações." target="_blank">
          <img src={ImagemWhatsApp} width="45px" alt="Fale conosco pelo WhatsApp" title=""/>
          </a>
        </div>
  </div>
 
  );
}

export default LandingPageFunction;
