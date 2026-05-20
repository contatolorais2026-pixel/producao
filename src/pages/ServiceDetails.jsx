import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import './styles/ServiceDetails.css'

import ReviewCard from "../components/ReviewCard";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ServiceSpecCard from "../components/ServiceSpecCard";
import servicos from "../data/servicos.json";
import { useNavigate } from "react-router-dom";
import Duracao from '../assets/icons/icon-duracao.svg';
import Garantia from '../assets/icons/icon-garantia.svg';
import Preco from '../assets/icons/icon-preco.svg';
import Audio from "../components/audio.jsx";
import Arrow from '../assets/icons/arrow.svg';
import Orcamento from '../assets/icons/orcamento_icon.svg';
import ScrollReveal from "../components/ScrowReveal";

function ServiceDetails() {
  const { id } = useParams();
  const servico = servicos.find(
    (item) => item.id === Number(id)
  );

  const imagensServico = servico && servico.imagem ? Object.values(servico.imagem) : [];
  const [imagemAtual, setimagemAtual] = useState(imagensServico[0] || "");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (imagensServico.length > 0) {
      setimagemAtual(imagensServico[0]);
    }
  }, [id]);

  if (!servico) {
    return <p>Serviço não encontrado</p>;
  }

  return (
    <div className="service-details">
      <Navbar />

      <div className="service-container">

        <div className="service-main">

          <ScrollReveal>
            <div className="back-link-wrapper">
              <Link to="/servicos" className="back-button">
                <img src={Arrow} alt="icone voltar" /> Voltar aos serviços
              </Link>
            </div>
          </ScrollReveal>

          <div className="service-content">

            <ScrollReveal>
              <div className="service-images">
                <div className="primary-image-wrapper">
                  <img
                    id="imagemPrincipal"
                    src={imagemAtual}
                    alt={`Imagem principal do serviço ${servico.nome}`}
                  />
                </div>

                <div className="image-carousel">
                  {imagensServico.map((img, index) => (
                    <img
                      key={index}
                      className={`thumbnail ${imagemAtual === img ? "active" : ""}`}
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      onClick={() => setimagemAtual(img)}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="service-info-column">
                <div className="service-info">
                  <h1 className="service-name">{servico.nome}</h1>
                  <div className="title-divider"></div>
                  <p className="service-description">{servico.descricao}</p>
                </div>

                <Link to="/contatos" className="quote-button">
                  <img src={Orcamento} alt="icone solicitar orçamento" />
                  SOLICITAR ORÇAMENTO
                </Link>
              </div>

            </ScrollReveal>

          </div>

          <ScrollReveal>
            <div className="service-specs-container">

              <ServiceSpecCard
                img={Duracao}
                altText="Ícone de prazo de entrega"
                title="PRAZO DE ENTREGA"
                value={servico.duracao}
                obs="O prazo de entrega pode variar de acordo com o caso apresentado"
              />

              <ServiceSpecCard
                img={Preco}
                altText="Ícone de valor do serviço"
                title="VALOR DO SERVIÇO"
                value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(servico.preco)}
                obs="O valor do serviço pode variar de acordo com o caso apresentado"
              />

              <ServiceSpecCard
                img={Garantia}
                altText="Ícone de tempo de garantia"
                title="TEMPO DE GARANTIA"
                value={servico.garantia}
                obs="Tempo de manutenção após a entrega do serviço"
              />

            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="extra-details-section">

              <div className="section-title-wrapper">
                <h1 className="section-title">
                  Detalhes do serviço
                </h1>
                <div className="title-divider"></div>
              </div>

              <div className="extra-details-images">
                <img src="/servicos/service_example2.png" alt="imagens de serviços" />
                <img src="/servicos/service_example3.png" alt="imagens de serviços" />
                <img src="/servicos/service_example4.png" alt="imagens de serviços" />
              </div>





            </div>
        
          </ScrollReveal>

        </div>
      </div>
    {servico.audio && (
              <Audio audio={servico.audio} />
            )}
      <Footer />
    </div>
  );
}

export default ServiceDetails;