<template>
  <div>
    <!-- <h2>{{ titulo }}</h2> -->
    <h2>{{ upperTitle() }}</h2>
    <p>Number of "<em>todos</em>": {{ todonum }}</p>
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