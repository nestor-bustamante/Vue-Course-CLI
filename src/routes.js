import Home from './views/home/Home.view';
// import OtraPagina from './views/otraPagina/OtraPagina.view';
import User from './views/otraPagina/user/User.view';
// import { resolve } from 'dns';

// cargar componentes cuando sean requerido.
const OtraPagina = resolve => {
  require.ensure(['./views/otraPagina/OtraPagina.view'], () => {
    resolve(require('./views/otraPagina/OtraPagina.view'));
  })
}

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/otra-pagina',
    component: OtraPagina,
    name: 'userList'
    // children: [
    //   {
    //     path: ':id',
    //     component: User,
    //     name: 'infoUser'
    //   }
    // ]
  },
  {
    path: '/otra-pagina/:id',
    component: User,
    name: 'infoUser'
  },
  {
    path: '*',
    redirect: '/'
  }
]
