import React from 'react';

import Logo from '../../assets/image/Logo.png'
import './Menu.css'
// import { Container } from './styles';
import ButtonLink from '../components/ButtonLink/index';

function Menu() {
  return(
      <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="AluraFlix logo"/> 
          </a>

          <ButtonLink className="ButtonLink" href="/">Novo Vídeo</ButtonLink>  

      </nav>
  );
}

export default Menu;