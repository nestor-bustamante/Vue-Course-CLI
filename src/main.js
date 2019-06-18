import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const myroutes = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
})

Vue.use(VueResource);
Vue.http.options.root = 'https://todovue-19af8.firebaseio.com';

export const bus = new Vue(); // puede recibir un objeto con methods:, data:, etc.

/*
Directivas personalizadas / Globales.

Primer argumento el nombre de la directiva. Ej. v-decorar.
Segundo argumento un objeto.
*/

Vue.directive('decorar', {
  bind(el, binding, vnode) {

    // Objetos.
    // se añade la key y el valor del objeto que se pasa.
    // Ej.
    // <span v-decorar="{fuentes: 'serif', color: 'red'}">Texto</span>
    // el.style.fontFamily = binding.value.fuentes;
    // el.style.color = binding.value.color;

    el.style.fontFamily = binding.value;

    // v-decorar.bold
    // modificadores
    if (binding.modifiers['bold']) {
      el.style.fontWeight = 'bold';
    }

    // v-decorar:big
    // argumentos
    if (binding.arg == 'big') {
      el.style.fontSize = '3rem';
    }
  }
})

// Vue.filter('nombreFiltro', function () { });

new Vue({
  el: '#app',
  router: myroutes, // definir constante de las rutas
  render: h => h(App)
})
