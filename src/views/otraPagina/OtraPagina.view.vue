<template>
  <div>
    <hr>
    <h1>Otra Página</h1>

    <h4>Lista de usuario</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in userlist" v-bind:key="user.id">
        <router-link v-bind:to="{ name:'infoUser', params: {id: user.id} }" class="nav-link">{{ user.name }}</router-link>
      </li>
    </ul>
    <br>
    <router-view></router-view>
    <br>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userlist: {}
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
      console.log(users);
      this.userlist = users
    })
  }
}
</script>
