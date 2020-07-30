import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastrarVideos from './components/Cadastro/Videos/index';
import CadastroCategoria from './components/Cadastro/Categoria/index';



const Pagina404 = () => (<div>Pagina404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastrar/videos" component={CadastrarVideos} />
      <Route path="/cadastrar/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />


    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);


