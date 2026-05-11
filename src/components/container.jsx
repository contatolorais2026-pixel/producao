import "../components/styles/container.css";

function Container({ image, title, subtitle, buttonText, buttonLink }) {
    return (
        <div className = "container-section"> 
            <div className="content-container">
                <div className="container-image animate-left">
                    <img src={image} alt={title} />
                </div>
                <div className="container-text animate-right">
                    <h2>{title}</h2>
                    <div className="yellow-line-container"></div>
                    <p>{subtitle}</p>
                    {buttonText && (
                        <a href={buttonLink} className="btn-glow">
                            {buttonText}
                        </a>
                    )}
             </div>
            </div>
        </div>
    );
}

export default Container;