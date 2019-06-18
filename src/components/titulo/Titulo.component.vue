<template>
  <div>
    <!-- <h2>{{ titulo }}</h2> -->
    <h2 class="muted">{{ upperTitle() }}</h2>
    <p>Number of "<em>todos</em>": {{ todonum }}</p>

    <div class="header clearix">
      <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/otra-pagina" class="nav-link">Otra página</router-link>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
import { bus } from '../../main';

export default {
  // props: ['titulo']
  props: { // se pasa como objeto en caso de no recibir nada en el tag
    titulo: {
      // required: true,
      type: String,
      default: 'título por defecto'
    }
  },
  data(){
    return {
      id: this.$route.params.id,
      todonum: 0
    }
  },
  methods: {
    upperTitle(){
      return this.titulo.toUpperCase();
    }
  },
  created(){
    bus.$on('counterUpdate', (todonum) => {
      this.todonum = todonum;
    });
  }
}
</script>

<style scoped lang="scss">
  .nav-item {
    a {
      &.is-active {
        color: #007bff;
        &:focus,
        &:hover {
          color: #007bff;
        }
      }
    }
  }
</style>
