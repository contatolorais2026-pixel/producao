
import { NavLink } from "react-router-dom";
import logo from "../assets/images/navbar/logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container d-flex align-items-center justify-content-between">

                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" height="50" />
                </NavLink>

                <div className="d-none d-sm-block d-lg-none text-center">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511960631516&text=Olá! Desejo solicitar um orçamento." className="btn btn-secondary fw-bold text-primary">
                        SOLICITE UM ORÇAMENTO
                    </a>
                </div>

                <button
                    className="btn btn-transparent ms-2 border-0 d-block d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <i className="bi bi-list fs-2 text-white"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="navbar-nav text-center">
                        <NavLink to="/" end className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            HOME
                        </NavLink>

                        <NavLink to="/sobre" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            SOBRE
                        </NavLink>

                        <NavLink to="/servicos" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            SERVIÇOS
                        </NavLink>

                        <NavLink to="/contatos" className={({ isActive }) =>
                            `nav-link fw-semibold ${isActive ? "active" : ""}`
                        }>
                            CONTATOS
                        </NavLink>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5511960631516&text=Olá! Desejo solicitar um orçamento." className="btn btn-secondary fw-bold text-primary d-block d-sm-none">
                            SOLICITE UM ORÇAMENTO
                        </a>
                    </div>
                </div>

                <div className="d-none d-lg-block text-center">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511960631516&text=Olá! Desejo solicitar um orçamento." className="btn btn-secondary fw-bold text-primary px-3">
                        SOLICITE UM ORÇAMENTO
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;