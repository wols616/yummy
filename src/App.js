import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import PaginaInicio from './componentes/PaginaInicio';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Home from './componentes/Home';
import RecipePage from './componentes/RecipePage';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Only render the Navbar on the PaginaInicio route
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <Navbar expand="md" className="p-4" style={{ backgroundColor: '#DDA15E' }}>
      <Navbar.Brand as={Link} to="/" className="d-md-none">
        <img
          src="https://i.ibb.co/93b8qKm/image-removebg-preview-3.png"
          alt="Logo"
          style={{ width: "50px", maxWidth: "100px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
      <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className='btn rounded-pill p-2 px-5 mx-2 my-md-0 my-2 boton'>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/login" className='btn rounded-pill p-2 px-5 mx-2 my-md-0 my-2 boton'>Iniciar Sesión</Nav.Link>
          <Nav.Link as={Link} to="/register" className='btn rounded-pill p-2 px-5 mx-2 my-md-0 my-2 boton'>Registrarse</Nav.Link>
        </Nav>
        <div className="d-none d-md-flex align-items-center col-md-4">
          <input type="text" className="rounded-pill p-2 col-12" placeholder="Buscar" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLogin(loggedIn);
  }, []);

  const logeo = () => {
    setLogin(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const deslogeo = () => {
    setLogin(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div className="body">
        {!isLogin && <NavbarComponent />}
        
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/login" element={<Login onLogin={logeo} />} />
          <Route path="/register" element={<Register onLogin={logeo} />} />
          <Route path='/home' element={<Home deslogeo={deslogeo}/>} />
          <Route path='/recipePage' element={<RecipePage deslogeo={deslogeo}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;