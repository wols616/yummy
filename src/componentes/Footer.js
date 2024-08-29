import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = ()=>{
    return(
        <>
        {/* Footer en la parte inferior */}
        <footer className="p-4" style={{ backgroundColor: "#DDA15E", color: "white", width: "100%", position: "relative" }}>
        <div className="container-fluid">
            <div>
                <h2>©2024 YUMMY</h2>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mt-3">
                <div className="d-flex gap-5">
                    <nav>TERMINOS DE USO</nav>
                    <nav>POLITICAS DE PRIVACIDAD</nav>
                    <nav>COOKIES</nav>
                </div>
                <div className='d-flex flex-md-row flex-column ms-3'>
                    <i className="bi bi-youtube m-1"></i>
                    <i className="bi bi-instagram m-1"></i>
                    <i className="bi bi-facebook m-1"></i>
                </div>
            </div>
        </div>
        </footer>
        </>
    );
}
export default Footer;

