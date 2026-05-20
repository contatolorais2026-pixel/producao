import './styles/Hero.css';

function Hero ({ imagem, titulo, subtitulo }) {
    const containerStyle = {
        backgroundImage: `url(${imagem})`,
    }

    return (
        <div className="container-hero container-fluid text-white py-5" style={containerStyle}>
            <div className="py-5">
                <div className="title">
                    <h1 className="title-hero">{titulo}</h1>
                    <p className="subtitle-hero">{subtitulo}</p>
                </div>
            </div>
        </div>
    )

}

export default Hero;