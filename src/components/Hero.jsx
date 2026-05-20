import './styles/Hero.css';

function Hero({ imagem, titulo, subtitulo }) {
    const containerStyle = {
        backgroundImage: `url(${imagem})`,
    }

    return (
        <div id="hero" class="d-flex justify-content-start align-items-end px-1 px-md-5 py-5 mb-5" style={containerStyle}>
            <div class="container">
                <div className="col-8">
                    <h1 className="fw-semibold text-white display-5">{titulo}</h1>
                    <p className="fw-normal text-white fs-3">{subtitulo}</p>
                </div>
            </div>
        </div>
    )

}

export default Hero;