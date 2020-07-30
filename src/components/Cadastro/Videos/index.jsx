import React from 'react';
import PageDefault from '../../../pages/PageDefault';

import { Link } from 'react-router-dom';

function CadastroVideos() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastrar/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideos; 
