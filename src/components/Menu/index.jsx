import React from 'react';

import Logo from '../../assets/image/Logo.png'
import './Menu.css'
import { Link } from 'react-router-dom';
import Button from '../Button/index';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastrar/videos">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;