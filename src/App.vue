<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <div class="col-6 align-self-center jumbotron">
        <titulo :titulo="titulo"></titulo>
        <router-view></router-view>
        <br>
        <!--  incrementarContador escucha lo que el hijo emite. -->
        <!-- <addtodo :todolist="todolist" v-on:incrementarContador="todonum += $event"></addtodo> -->
        <addtodo :todolist="todolist" :counterUpdate="counterUpdate"></addtodo>
        <todolist :todolist="todolist"></todolist>
        <br>
        <hr>
        <button  v-decorar.bold="'Courier New'" class="btn btn-outline-primary" @click="selectComponent = 'login'">Login</button>
        <button v-decorar.bold="'Courier New'" class="btn btn-outline-primary" @click="selectComponent = 'forgotpass'">Forgot Pass</button>
        <br>
        <br>

        <keep-alive><!--// este tag no destruye el componente //-->
          <component v-bind:is="selectComponent"></component>
        </keep-alive>

      </div>
    </div>
  </div>
</template>

<script>
import Titulo from './components/titulo/Titulo.component';
import Addtodo from './components/addtodo/Addtodo.component';
import Todolist from './components/todolist/Todolist.component';
import Formulario from './components/formulario/Formulario.component';

import Login from './components/login/Login.component';
import Forgotpass from './components/forgotpass/Forgotpass.component';

export default {
  components: {
    Titulo,
    Addtodo,
    Todolist,
    formulario: Formulario,
    login: Login,
    forgotpass: Forgotpass
  },
  data(){
    return {
      titulo: 'To do list',
      todonum: 0,
      todolist: [],
      selectComponent: 'login'
    }
  },
  methods: {
    counterUpdate(){
      this.todonum++;
    }
  },
  directives: {
    // Directivas locales es básicamente lo mismo que global.
    // Ejemplo de directiva global en main.js
    'decorar-local': {
      bind(el, binding, vnode){
        el.style.fontFamily = binding.value;
      }
    }
  },
  created(){
    // gancho para leer en firebase de una. (ciclo de vida)
    this.$http.get('todolist.json')
    .then(resp => {
      return resp.json();
    })
    .then(resp => {
      for(let item in resp) {
        let todo = {
          id: item,
          text: resp[item].text,
          terminada: resp[item].terminada
        }
        this.todolist.push(todo);
      }
    })
  }
}
</script>

<style lang="scss">
  .jumbotron {
    margin: 2rem 0;
    padding: 2rem;
  }
</style>
