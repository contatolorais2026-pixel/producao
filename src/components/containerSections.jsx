import './styles/containerSections.css';

function ContainerSections({ 
  title, imgLeft, imgRight,  subtitle1, description1, icon1,
  subtitle2, description2, icon2,
  subtitle3, description3, icon3
}) {
  return (
    <div className="general-container">
      <img src={imgLeft} className="side-image left" alt="" />
      
      <div className="container-sections">
        <h2>{title}</h2>
        <div className="yellow-line"></div>

        <div className="sections-list">
          <div className="section-item">
            <img src={icon1} className="section-icon" alt="ícone" />
            <div className="section-text">
              <h3>{subtitle1}</h3>
              <p>{description1}</p>
            </div>
          </div>

          <div className="section-item">
            <img src={icon2} className="section-icon" alt="ícone" />
            <div className="section-text">
              <h3>{subtitle2}</h3>
              <p>{description2}</p>
            </div>
          </div>

          <div className="section-item">
            <img src={icon3} className="section-icon" alt="ícone" />
            <div className="section-text">
              <h3>{subtitle3}</h3>
              <p>{description3}</p>
            </div>
          </div>
        </div>
      </div>

      <img src={imgRight} className="side-image right" alt="" />
    </div>
  );
}

export default ContainerSections;