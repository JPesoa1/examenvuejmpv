<template>
  <div>
    <form method="post" class="custom-form" v-on:submit.prevent="login()">
            <h1>Login</h1>
            <label>Introduce el email:</label><br/>
            <input class="form-control" type="text" v-model="email" placeholder="User Name" required/>
            <label>Introduce la contraseña:</label><br/>
            <input class="form-control" type="text" v-model="password" placeholder="Password" required/>
            <button class="btn btn-info">Log in</button>
        </form>
  </div>
  <br/>
  <router-link class="btn btn-info" to="/registro">Registrase</router-link>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"LoginComponent",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      login(){
        console.log("login  ")
        services.postLogin(this.email,this.password).then(res=>{
          localStorage.setItem("token",res);

          if(res){
            this.$router.push("/cubos");
          }
        })
      }
    }
}
</script>

<style>

</style>