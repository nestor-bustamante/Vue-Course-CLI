<template>
  <div>
    <h3>Info user</h3>
    <div>
      <p><strong>Nombre:</strong> {{ nombre }}</p>
      <p><strong>Correo:</strong> {{ email }}</p>
    </div>

    <button class="btn btn-primary" @click="backToUser">Back</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nombre: '',
      email: ''
    }
  },
  methods: {
    getUsers(){
      let id = this.$route.params.id;
      this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(resp => resp.json())
      .then(user => {
        this.nombre = user.name;
        this.email = user.email.toLowerCase();
      })
    },
    backToUser() {
      this.$router.push({name: 'userList' });
    }
  },
  // watch: {
  //   $route(){
  //     this.getUsers();
  //   }
  // },
  created(){
    this.getUsers();
  }
}
</script>
