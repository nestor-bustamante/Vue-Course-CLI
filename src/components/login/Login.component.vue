<template>
  <!-- componente Slots -->
  <formulario>
    <!-- 
      En el componente añadir name a un slot y luego el elemento que se cargue
      en ese slot añadir la propiedad slot="nombre_slot" y darle el nombre de la
      posición del slot.
      -->
    <h3 slot="titulo">Iniciar sesión</h3>
    <div  slot="elements" class="form-group">
      <label for="correo">Email</label>
      <input type="email" id="correo" class="form-control" v-model.trim.lazy="user.correo" required>
      <p>{{user.correo}} / {{user.correo.length}} / {{typeof user.correo }}</p>
    </div>

    <div slot="elements" class="form-group">
      <label for="contry">Country</label>
      <select class="form-control" name="contry" v-model="user.country" required>
        <option v-for="country in sortedArray" v-bind:key="country">{{ country }}</option>
      </select>
      <p>{{user.country}} / {{typeof user.country}}</p>
    </div>
    
    <div slot="elements" class="form-group">
      <label for="pass">Pass</label>
      <input type="password" id="pass" class="form-control" v-model.trim.number="user.pass" required>
      <p>{{user.pass | uppercase }} / {{typeof user.pass}}</p>
    </div>

    <button slot="submit-button" class="btn btn-primary" type="submit" @click.prevent="sendForm">Iniciar sesión</button>

  </formulario>
</template>

<script>
import Formulario from './../formulario/Formulario.component';
export default {
  components: {
    formulario: Formulario
  },
  data() {
    return {
      user: {
        correo: '',
        pass: '',
        country: 'Chile',
        checkbox: [] // se defines los checkbox como array.
      },
      countries: ['Chile', 'Uruguay', 'Perú', 'Argentina', 'Colombia', 'Bolivia', 'Brasil', 'Venezuela', 'Paraguay', 'Ecuador']
    }
  },
  computed: {
    // ordenando un array en in v-for
    sortedArray() {
      function compare(a, b) {
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      }
      return this.countries.sort(compare);
    }
  },
  methods: {
    sendForm(){
      let userData = this.user.correo +'\n'+ this.user.pass +'\n'+ this.user.country;
      console.log('userData: ', userData);
    }
  },
  filters: {
    uppercase(string){
      return string.toUpperCase();
    }
  },
  destroyed() {
    // cuando no está dentro del tag <keep-alive>
    console.log('destruido')
  },
  activated(){
    console.log('activado');
  },
  deactivated(){
    console.log('desactivado, pero no destruido (keep-alive)');
  }
}
</script>