import "./styles/containerabout.css";

function ContainerAbout({ title, description, quote }) {
  return (
    <section className="who-section">
      <div className="who-container">

        <h2>{title}</h2>

        <span className="yellow-line-container-about"></span>

      
          <blockquote className="about-quote">
            {quote}
          </blockquote>
        

        <p>
          {description}
        </p>

      </div>
    </section>
  );
}

export default ContainerAbout;