<template>
  <!-- componente Slots -->
  <formulario>
    <!-- 
      En el componente añadir name a un slot y luego el elemento que se cargue
      en ese slot añadir la propiedad "slot" y darle el nombre de la
      posición.
      -->
    <h3 slot="titulo">Recuperar contraseña</h3>
    <div  slot="elements" class="form-group">
      <label for="correo">Email</label>
      <input type="email" id="correo" class="form-control" requiered>
    </div>
    <button slot="submit-button" class="btn btn-primary" type="submit">Recuperar contraseña</button>
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
      
    }
  }
}
</script>