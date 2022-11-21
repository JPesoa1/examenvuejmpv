<template>
  <div>
    <form method="post" class="custom-form" v-on:submit.prevent="registro()">
            <h1>Registro</h1>
            <label>Introduce el nombre:</label><br/>
            <input class="form-control" type="text" v-model="nombre" placeholder="User Name" required/>
            <label>Introduce la email:</label><br/>
            <input class="form-control" type="text" v-model="email" placeholder="Password" required/>
            <label>Introduce la contraseña:</label><br/>
            <input class="form-control" type="text" v-model="password" placeholder="Password" required/>
            <button class="btn btn-info">Log in</button>
      </form>

  </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"RegistroComponent",
    data(){
      return{
        nombre:"",
        email:"",
        password:""
      }
    },
    mounted(){
      
    },
    methods:{
      registro(){
        var nombre=this.nombre;
        var emial=this.email;
        var pass=this.password;
        services.postRegistro(nombre,emial,pass).then(res=>{
          console.log(res);
          this.$router.push("/");
         })
      }
    }
}
</script>

<style>

</style>