import Container from "../components/container";
import Navbar from "../components/Navbar";
import img from '../assets/images/about/sobre.png';
import imgCeo from '../assets/images/about/Sidney.jpeg';
import ContainerCeo from "../components/containerCeo";
import Footer from "../components/footer";
import Hero from '../components/Hero';
import imgcontrato from '../assets/images/about/contrato.png';
import imgbanner from "../assets/images/services/hero.png";
import ContainerSections from "../components/containerSections";
import imgLeft from '../assets/images/about/prediodireito.png';
import imgRight from '../assets/images/about/predioesquerdo.png';
import icon1 from '../assets/icons/shield-check-icon.svg';
import icon2 from '../assets/icons/house-icon.svg';
import icon3 from '../assets/icons/ferramenta-icon.svg';
import ScrollReveal from "../components/ScrowReveal";
import ContainerAbout from "../components/containerabout";
import Audio from "../components/audio.jsx";
import audioabout from "../../public/audios/audioabout.mp3";

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
            subtitle="A Lorais nasceu da união entre experiência técnica, compromisso com a qualidade e a busca por soluções elétricas seguras e eficientes. Atuando nas áreas de instalações elétricas, manutenções residenciais e serviços prediais, a empresa oferece atendimento transparente, responsabilidade técnica e atenção aos detalhes em cada projeto realizado. Com uma trajetória construída ao longo de anos de atuação nos setores de elétrica, telecomunicações e tecnologia, a Lorais carrega valores como confiança, profissionalismo e dedicação ao cliente. Mais do que executar serviços, a empresa busca entregar segurança, eficiência e tranquilidade para cada pessoa atendida."
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
  title="A história por trás da Lorais"
  quote="“ Mais do que um negócio, este empreendimento também representa um legado: o desejo de ensinar ao meu filho o valor da profissão, do trabalho técnico e da construção de algo sólido através do conhecimento e da dedicação.”"
  description="Sou profissional da área de elétrica, telecomunicações e tecnologia, com uma trajetória construída entre experiência prática, gestão de projetos e atendimento técnico ao cliente. Minha formação começou no SENAI, em Elétrica, onde iniciei minha atuação trabalhando em condomínio com instalação de sistemas de iluminação de emergência e sensores de presença. Mais tarde, ampliei meus conhecimentos com formação técnica em Telecomunicações e graduação em Informática com Gestão de Negócios pela FATEC.

Ao longo da minha carreira, tive a oportunidade de atuar em grandes empresas como Embratel e TIM, trabalhando com gestão de projetos, infraestrutura e Pós-vendas, sempre unindo conhecimento técnico, organização e foco em soluções eficientes.

Com o passar dos anos, percebi uma grande carência de mão de obra qualificada e comprometida no setor de instalações elétricas e manutenções residenciais e prediais. Foi essa percepção que me motivou a empreender e criar um serviço baseado em confiança, segurança, qualidade e atendimento transparente.

Hoje, realizo instalações elétricas residenciais, manutenções prediais, reparos e soluções elétricas com responsabilidade e atenção aos detalhes, buscando sempre oferecer um trabalho bem executado e seguro para cada cliente.

"
/>
</ScrollReveal>





      <ScrollReveal>
        <Container
          image={imgcontrato}
          title="Contrato de prestação de serviço"
          subtitle="Nosso contrato de prestação de serviço é elaborado para garantir transparência, segurança e confiança em todas as etapas do trabalho realizado. Nele são definidos com clareza os serviços contratados, prazos, responsabilidades e condições acordadas, assegurando que tanto o cliente quanto a Lorais tenham total alinhamento durante a execução do serviço. Nosso compromisso é oferecer um atendimento profissional, organizado e sem surpresas, proporcionando tranquilidade e segurança desde o início até a conclusão do projeto."
        />
      </ScrollReveal>
 
        <Audio audio={audioabout} />

      <Footer />
    </div>
    
  );
}

export default About;