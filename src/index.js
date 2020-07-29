import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>404</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route  component={Pagina404}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

