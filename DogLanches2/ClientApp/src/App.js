import { Component } from 'react';
import * as React from 'react';
import { Route } from 'react-router';
import Layout from './Pages/Layout/index';
import Home from './Pages/Home/index';
import Cardapio from './Pages/Cardapio/index';
import Ingrediente from './Pages/Ingrediente/index';
import Cadastro from './Pages/Cadastro/index';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Cardapio' component={Cardapio}  />
        <Route path='/Ingredientes' component={Ingrediente} />
        <Route path='/Cadastro' component={Cadastro} />
      </Layout>
    );
  }
}
