import "./styles/Services.css";
import Hero from "../components/Hero";
import CardService from "../components/CardService";
import servicos from "../data/servicos.json";
import BackgroundHero2 from "../assets/images/services/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ScrollReveal from "../components/ScrowReveal";
import AudioServico from "../components/audio.jsx";
import audioServico from "../../public/audios/audioservico.mp3";

function Services() {
  return (
    <div className="services">
      <Navbar />

      <ScrollReveal>
        <Hero imagem={BackgroundHero2} titulo="Nosso Serviços" />
      </ScrollReveal>

      <div className="container-services">

        <ScrollReveal>
          <div className="container-cards">
            {servicos.map((servico) => (
              <CardService key={servico.id} data={servico} />
            ))}
          </div>
        </ScrollReveal>
         
      </div>
     <ScrollReveal>
        <AudioServico audio={audioServico} />

     </ScrollReveal>
      <Footer />
    </div>
  );
}

export default Services;