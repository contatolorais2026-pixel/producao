import React, { useState } from 'react';
import "./styles/Contato.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import iconTelefone from "../assets/icons/icon-telefone.svg";
import iconEmail from "../assets/icons/icon-email.svg";
import iconWhatsapp from "../assets/icons/icon-whatsapp.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import iconLinkedin from "../assets/icons/icon-linkedin.svg";

function Contato() {

    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const phone_lorais = "5511949694654"; 
        const { nome, telefone, email, mensagem } = formData;

        const texto = `⚡ *SOLICITAÇÃO DE SERVIÇO ELÉTRICO* ⚡\n` + //TROCAR DEPOIS
              `──────────────────────────\n` +
              `🏗️ *Tipo:* Atendimento Predial\n` +
              `👤 *Cliente:* ${nome}\n` +
              `📞 *Fone:* ${telefone}\n` +
              `✉️ *E-mail:* ${email}\n` +
              `──────────────────────────\n` +
              `📝 *Relato do Problema/Serviço:* \n` +
              `_${mensagem}_`;

        const url = `https://api.whatsapp.com/send?phone=${phone_lorais}&text=${encodeURIComponent(texto)}`;
        
        window.open(url, '_blank');
    };

  return (
    <div className="contact">
        <Navbar />
        <div className="contact-container">
            <div className="contact-main">
                <div className="title-contact">
                    <h1>Entre em contato conosco</h1>
                    <div className="title-divider"></div>
                    <p>Entre em contato para solicitar um orçamento sem compromisso. Nossa equipe responderá em até 24 horas.</p>
                </div>

                <div className="contact-section">
                    <div className="form-section">
                        <h2>Envie uma Mensagem</h2>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    placeholder="Insira seu nome completo" 
                                    required 
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone">Telefone:</label>
                                <input 
                                    type="tel" 
                                    id="telefone" 
                                    placeholder="Insira seu telefone" 
                                    required 
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Insira seu e-mail" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem:</label>
                                <textarea 
                                    id="mensagem" 
                                    placeholder="Insira sua mensagem" 
                                    required 
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Enviar Mensagem</button>
                        </form>
                    </div>
                    
                    <div className="contact-info-card">
                        <h2>Fale Conosco</h2>
                        
                        <div className="info-item">
                            <div className="icon-circle">
                                <img src={iconTelefone} alt="" />
                            </div>
                            <div className="info-text">
                                <strong>(11) 98765-4321</strong>
                                <span>Segunda a Sexta, 9h as 18h</span>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="icon-circle">
                                <img src={iconEmail} alt="" />
                            </div>
                            <div className="info-text">
                                <strong>contato@email.com</strong>
                                <span>Respondemos em até 1 dia útil</span>
                            </div>
                        </div>

                        <h2>Redes Sociais</h2>
                        <p className="social-subtitle">Siga-nos nas redes sociais!</p>
                        
                        <div className="social-links">
                            <a href="#" className="social-icon">
                                <img src={iconWhatsapp} alt="" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src={iconInstagram} alt="" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src={iconLinkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="title-contact">
                    <h1>Nossa área de atuação</h1>
                    <div className="title-divider"></div>
                </div>

                <div className="map-wrapper" style={{ marginTop: '2rem', marginBottom: '4rem', width: '100%' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7316.575297340995!2d-46.4773694253167!3d-23.52215441870102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1777495078189!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0, borderRadius: '15px' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contato;
