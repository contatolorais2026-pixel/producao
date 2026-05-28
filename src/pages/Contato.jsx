import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./styles/Contato.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import iconTelefone from "../assets/icons/icon-telefone.svg";
import iconEmail from "../assets/icons/icon-email.svg";
import iconWhatsapp from "../assets/icons/icon-whatsapp.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import ScrollReveal from '../components/ScrowReveal';
import Audio from "../components/audio.jsx";
import audioContato from "../../public/audios/audiocontato.mp3";

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [alert, setAlert] = useState({
        show: false,
        type: '',
        message: ''
    });

    const [startTime] = useState(Date.now());
    const [lastSubmit, setLastSubmit] = useState(0);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const showAlert = (type, message) => {
        setAlert({
            show: true,
            type,
            message
        });

        setTimeout(() => {
            setAlert({
                show: false,
                type: '',
                message: ''
            });
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

       
        if (e.target.website.value !== "") {
           
            showAlert('success', 'E-mail enviado com sucesso!');
            return;
        }

    
        const elapsed = Date.now() - startTime;
        if (elapsed < 3000) {
            showAlert('error', 'Aguarde alguns segundos.');
            return;
        }

       
        const now = Date.now();
        if (now - lastSubmit < 30000) {
            showAlert('error', 'Espere 30 segundos para enviar novamente.');
            return;
        }

        const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        const telefoneRegex = /^[0-9\s()+-]{8,20}$/;

     
        if (formData.nome.length < 3) {
            showAlert('error', 'Nome muito curto.');
            return;
        }

        if (!nomeRegex.test(formData.nome)) {
            showAlert('error', 'Nome inválido.');
            return;
        }

        if (!telefoneRegex.test(formData.telefone)) {
            showAlert('error', 'Telefone inválido.');
            return;
        }

        if (formData.mensagem.length < 10) {
            showAlert('error', 'Mensagem muito curta.');
            return;
        }

        if (formData.mensagem.length > 500) {
            showAlert('error', 'Mensagem muito longa.');
            return;
        }

    
        if (
            formData.mensagem.includes('http') ||
            formData.mensagem.includes('www.')
        ) {
            showAlert('error', 'Links não são permitidos.');
            return;
        }

        setIsSubmitting(true);

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    nome: formData.nome,
                    telefone: formData.telefone,
                    email: formData.email,
                    mensagem: formData.mensagem
                },
                publicKey
            );

            setLastSubmit(Date.now());
            showAlert('success', 'E-mail enviado com sucesso!');
            setFormData({
                nome: '',
                telefone: '',
                email: '',
                mensagem: ''
            });

        } catch (error) {
            showAlert('error', 'Erro ao enviar. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact">
            <Navbar />

            <ScrollReveal>
                <div className="contact-container">
                    <div className="contact-main">

                        <div className="title-contact">
                            <h1>Entre em contato conosco</h1>
                            <div className="title-divider"></div>
                            <p>
                                Entre em contato para solicitar um orçamento sem compromisso.
                                Nossa equipe responderá em até 24 horas.
                            </p>
                        </div>

                        <div className="contact-section">
                            <div className="form-section">
                                <h2>Envie uma Mensagem</h2>

                                <form id="contactForm" onSubmit={handleSubmit}>

                                  
                                    <input
                                        type="text"
                                        name="website"
                                        style={{ display: 'none' }}
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />

                                    <div className="form-group">
                                        <label htmlFor="nome">Nome:</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            placeholder="Insira seu nome completo"
                                            required
                                            maxLength={100}
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
                                            maxLength={20}
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
                                            maxLength={100}
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
                                            maxLength={500}
                                            value={formData.mensagem}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                {' '}Enviando...
                                            </>
                                        ) : (
                                            'Enviar Mensagem'
                                        )}
                                    </button>
                                </form>
                            </div>

                            <div className="contact-info-card">
                                <h2>Fale Conosco</h2>

                                <div className="info-item">
                                    <div className="icon-circle">
                                        <img src={iconTelefone} alt="Telefone" />
                                    </div>
                                    <div className="info-text">
                                        <strong>(11) 96063-1516</strong>
                                        <span>Segunda a Sexta, 9h às 18h</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="icon-circle">
                                        <img src={iconEmail} alt="E-mail" />
                                    </div>
                                    <div className="info-text">
                                        <strong>sidarol@gmail.com</strong>
                                        <span>Respondemos em até 1 dia útil</span>
                                    </div>
                                </div>

                                <h2>Redes Sociais</h2>
                                <p className="social-subtitle">
                                    Siga-nos nas redes sociais!
                                </p>

                                <div className="social-links">
                                    <a
                                        href="https://wa.me/5511960631516"
                                        className="social-icon"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={iconWhatsapp} alt="WhatsApp" />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/sidarol"
                                        className="social-icon"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={iconInstagram} alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="title-contact">
                            <h1>Nossa área de atuação</h1>
                            <div className="title-divider"></div>
                        </div>

                        <div
                            className="map-wrapper"
                            style={{
                                marginTop: '2rem',
                                marginBottom: '4rem',
                                width: '100%'
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24580.994858597358!2d-46.5272829952187!3d-23.676431917942548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1779849382336!5m2!1spt-BR!2sbr"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </ScrollReveal>

            <Audio audio={audioContato} />
            <Footer />

            {alert.show && (
                <div className="toast-overlay">
                    <div className={`toast-alert toast-${alert.type}`}>
                        <span className="toast-icon">
                            {alert.type === 'success' ? '✓' : '✕'}
                        </span>
                        <span className="toast-message">
                            {alert.message}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contato;