import Navbar from "../components/Navbar.jsx";
import Hero from '../components/Hero';
import sobre from '../assets/images/home/sobre.jpg';
import BackgroundHero2 from '../assets/images/home/hero_home.png';
import './styles/Home.css';
import Container from "../components/container.jsx";
import imgBen1 from '../assets/images/home/seguranca.png';
import imgBen2 from '../assets/images/home/entrega.jpeg';
import imgBen3 from '../assets/images/home/especializacao.jpeg';
import ContainerBenefits from "../components/containerbenefits.jsx";
import ContainerService from "../components/containerService.jsx";
import ContainerAvaliations from "../components/containerAvaliations.jsx";
import Footer from "../components/footer.jsx";
import ScrollReveal from "../components/ScrowReveal.jsx";

function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-content">

        <ScrollReveal>
          <Hero
            imagem={BackgroundHero2}
            titulo="Segurança e economia elétrica para seu condomínio"
            subtitulo="Soluções elétricas prediais e residenciais, especializadas em condomínios"
          />
        </ScrollReveal>

         <ScrollReveal>
          <Container
            image={sobre}
            title="SOBRE A LORAIS"
            subtitle="Oferecemos uma ampla gama de serviços elétricos para condomínios, incluindo manutenção preventiva, instalação de sistemas de segurança, iluminação eficiente e muito mais. Nossa equipe de profissionais altamente qualificados está pronta para garantir a segurança e o conforto dos moradores do seu condomínio."
            buttonText="Saiba Mais"
            buttonLink="/sobre"
          />
      </ScrollReveal>

        <ScrollReveal>
          <ContainerBenefits
            title="Por que escolher a Lorais?"
            b1Img={imgBen1}
            benefit1="Segurança em Primeiro Lugar"
            description1="Trabalhamos seguindo boas práticas elétricas para garantir instalações seguras, confiáveis e adequadas às necessidades do condomínio."
            b2Img={imgBen2}
            benefit2="Responsabilidade e Compromisso com a Entrega"
            description2="Cumprimos prazos, mantemos comunicação clara com o cliente e realizamos cada serviço com organização e profissionalismo."
            b3Img={imgBen3}
            benefit3="Especialização em Condomínios"
            description3="Atendimento focado em demandas prediais, oferecendo soluções eficientes que reduzem problemas futuros e custos inesperados."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ContainerService
            title="Conheça nossos serviços"
            s1Img={imgBen1}
            description1="Manutenção preventiva para garantir o bom funcionamento dos sistemas elétricos do condomínio."
            s2Img={imgBen2}
            description2="Instalação, manutenção e substituição de sistemas de iluminação de emergência, garantindo funcionamento adequado em casos de queda de energia, conforme normas de segurança elétrica."
            s3Img={imgBen3}
            description3="Soluções de iluminação e ventilação eficiente para áreas comuns, reduzindo custos e melhorando a estética do condomínio."
          />
        </ScrollReveal>

        <Footer />

      </div>
    </div>
  );
}

export default Home;