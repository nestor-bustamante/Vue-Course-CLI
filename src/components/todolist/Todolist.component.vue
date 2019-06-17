<template>

  <ul class="list-group margin-top-ul">
    <li
      class="list-group-item"
      v-for="(list, index) in todolist"
      v-bind:key="index">
      <div class="row align-items-center">
        <div class="col" v-bind:class="{finished: list.terminada}">{{list.text}}</div>
        <div class="col-4 text-right">
          <button class="btn btn-sm btn-success" @click="finished(index)">
            <i class="fas fa-check"></i>
          </button>
          <button class="btn btn-sm btn-danger" @click="removeTodo(index)">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  props: ['todolist'],
  counter: 0,
  methods: {
    finished(index) {
      let terminada = this.todolist[index].terminada = !this.todolist[index].terminada;
      let id = this.todolist[index].id;
      // hacer cambios sobre id
      this.$http.patch('todolist/' + id + '.json', {
        terminada: terminada
      }).then(resp => console.log(resp))
    },
    removeTodo(index) {
      let id = this.todolist[index].id;
      this.todolist.splice(index, 1);
      this.$http.delete('todolist/' + id + '.json')
      .then(resp => console.log(resp))
    }
  }
}
</script>

<style scoped lang="scss">
  /*
  scoped es la regla que recibe el estilo que solo afectará
  a los elementos que vivan dentro del componente.
  */
  .finished {
    color: gray;
    text-decoration: line-through;
  }
  .margin-top-ul {
    margin-top: 2rem;
  }
</style>
