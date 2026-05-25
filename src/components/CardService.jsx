import { useRef, useState, useEffect } from 'react';
import './styles/CardService.css';
import IconeEye from '../assets/icons/eye.svg'; 
import { Link } from "react-router-dom";

function CardService ({ data }) {
    const limit = 145;
    const isLongText = data.descricao.length > limit;
    const textToShow = isLongText ? data.descricao.substring(0, limit) + '... ' : data.descricao;

    return (
        <div className="conteiner-card">
            <div className="imagem-card">
                <img src={data.imagem.imagem1} alt={data.nome} />
            </div>
            <div className="card-info"> 
                <h1>{data.nome}</h1>
                <p className="card-desc">
                    {textToShow}
                    {isLongText && (
                        <Link to={`/servicos/${data.id}`} className="ver-mais-link">Veja mais</Link>
                    )}
                </p>
            </div>
            <div className="card-btn">
                <Link to="https://wa.me/5511960631516" className="btn-primary">SOLICITAR ORÇAMENTO</Link>
                <Link to={`/servicos/${data.id}`} className="btn-icon"><img src={IconeEye} alt="icone visualizar" /></Link>
            </div>
        </div>
    )

}

export default CardService;