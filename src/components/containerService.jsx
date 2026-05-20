import './styles/containerService.css';

function ContainerService({ 
  title, 
  s1Img, description1, 
  s2Img, description2, 
  s3Img, description3 
}) {
  return (
    <section className="services-section">
      <div className="services-title">
        <h2>{title}</h2>
        <div className="yellow-line"></div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="card-image">
            <img src={s1Img} alt="Serviço 1" />
          </div>
          <div className="card-footer">
            <p>{description1}</p>
           <p> <a href="/servicos/1">Saiba mais...</a></p>
          </div>
        </div>

 <div className="service-card">
          <div className="card-image">
            <img src={s3Img} alt="Serviço 3" />
          </div>
          <div className="card-footer">
            <p>{description3}</p>
          <p> <a href="/servicos/2">Saiba mais...</a></p> 
          </div>
        </div>
        <div className="service-card active">
          <div className="card-image">
            <img src={s2Img} alt="Serviço 2" />
          </div>
          <div className="card-footer">
            <p>{description2}</p>
         <p>    <a href="servicos/3">Saiba mais...</a></p> 
          </div>
        </div>

    
       
      </div>
    </section>
  );
}

export default ContainerService;