<template>
<div class="input-group">
  <input
    type="text"
    placeholder="add new todo"
    class="form-control"
    v-model="newtodo"
    @keyup.enter="addtodo">

  <span class="input-group-append">
    <button 
      class="btn btn-primary"
      @click="addtodo">Add</button>
  </span>
</div>
</template>

<script>
import { bus } from '../../main';

export default {
  data(){
    return {
      newtodo: ''
    }
  },
  props: ['todolist', 'counterUpdate'],
  methods: {
    addtodo(){
      const todo = this.newtodo.trim();
      if (todo) {
        this.todolist.push({
          text: todo,
          terminada: false
        })
        // forma de comunicarse con el componente padre.
        // pasar datos de hijo a padre.
        // this.$emit('incrementarContador', 1);
        // this.counterUpdate();
        bus.$emit('counterUpdate', this.todolist.length);
      }
      this.newtodo = '';

      // librería VueResource
      this.$http.post('todolist.json', {
        text: todo,
        terminada: false
      }).then(resp => console.log(resp));
    }
  },
  created() {
    bus.$emit('counterUpdate', this.todolist.length);
  }

}
</script>