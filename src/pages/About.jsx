import Container from "../components/container";
import Navbar from "../components/Navbar";
import img from '../assets/images/about/sobre.png';
import imgCeo from '../assets/images/about/Sidney.jpeg';
import ContainerCeo from "../components/containerCeo";
import Footer from "../components/footer";
import Hero from '../components/Hero';
import imgcontrato from '../assets/images/about/contrato.png';
import imgbanner from "../assets/images/services/hero.png";
import ContainerSections from "../components/ContainerSections";
import imgLeft from '../assets/images/about/prediodireito.png';
import imgRight from '../assets/images/about/predioesquerdo.png';
import icon1 from '../assets/images/about/verificado.png';
import icon2 from '../assets/images/about/casa.png';
import icon3 from '../assets/images/about/ferramenta.png';
import ScrollReveal from "../components/ScrowReveal";
import ContainerAbout from "../components/containerabout";

function About() {
  return (
    <div className="about-container">
      <Navbar />
  <ScrollReveal>
      <Hero
        imagem={imgbanner}
        titulo="Sobre"
      />
</ScrollReveal>
      <div className="about-content">

        <ScrollReveal>
          <Container
            image={img}
            title="Seu Condominío em boas mãos, sua energia em dia"
            subtitle="A Lorais nasceu para simplificar a elétrica do seu dia a dia. A gente cuida de tudo — desde a troca de uma tomada ou ventilador até a manutenção completa de condomínios com foco em economia e segurança. Seja instalando sensores, iluminação de emergência ou automação, nosso trabalho é garantir que a energia da sua casa funcione perfeitamente, sem que você precise se preocupar com sustos ou desperdícios."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ContainerSections
            title="Benefícios para seu condomínio"
            imgLeft={imgLeft}
            imgRight={imgRight}
            icon1={icon1}
            subtitle1="Segurança Reforçada"
            description1="Manutenções rigorosas que evitam curtos-circuitos e garantem a proteção total dos moradores."
            icon2={icon2}
            subtitle2="Economia de Energia"
            description2="Otimização do sistema elétrico para reduzir o desperdício e baixar os custos do condomínio."
            icon3={icon3}
            subtitle3="Valorização Patrimonial"
            description3="Instalações modernas e seguras que aumentam o valor de mercado do seu imóvel."
          />
        </ScrollReveal>

      </div>

      <ScrollReveal>
        <ContainerCeo
          leftText="Sidney Oliveira"
          image={imgCeo}
          rightText="CEO da lorais"
        />
      </ScrollReveal>

<ScrollReveal>
  <ContainerAbout
    title="Quem é Sidney?"
    description="Sidney é o fundador e proprietário da Lorais, eletricista profissional com experiência em serviços residenciais, comerciais e principalmente em condomínios. Ao longo de sua trajetória, desenvolveu um trabalho baseado em responsabilidade, segurança e compromisso com cada cliente atendido. Sua missão é oferecer soluções elétricas eficientes, prevenindo riscos, reduzindo custos com manutenção corretiva e garantindo o funcionamento adequado de toda a infraestrutura elétrica.

Com foco especial no atendimento a condomínios, Sidney busca entender a realidade de cada local para propor melhorias que aumentem a segurança dos moradores, valorizem o patrimônio e proporcionem economia de energia. A Lorais nasceu justamente dessa visão: levar profissionalismo, organização e confiança para serviços elétricos que muitas vezes são tratados apenas como emergência.

Mais do que executar instalações e manutenções, Sidney trabalha para construir relações de confiança duradouras, oferecendo suporte contínuo, atendimento transparente e serviços realizados dentro das normas técnicas vigentes. Seu objetivo é simples: garantir que síndicos, administradores e moradores tenham tranquilidade sabendo que a parte elétrica está em boas mãos."
  />
</ScrollReveal>





      <ScrollReveal>
        <Container
          image={imgcontrato}
          title="Contrato de prestação de serviço"
          subtitle="Nosso contrato de prestação de serviço é elaborado para garantir transparência, segurança e confiança em todas as etapas do trabalho realizado. Nele são definidos com clareza os serviços contratados, prazos, responsabilidades e condições acordadas, assegurando que tanto o cliente quanto a Lorais tenham total alinhamento durante a execução do serviço. Nosso compromisso é oferecer um atendimento profissional, organizado e sem surpresas, proporcionando tranquilidade e segurança desde o início até a conclusão do projeto."
        />
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default About;