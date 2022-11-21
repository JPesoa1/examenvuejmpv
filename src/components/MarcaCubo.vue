<template>
  <div v-for="cubo in cubos" :key="cubo" style="float:left">
    <div class="card" style="width: 18rem; height: 450px;">
            <img style="width: 100%; height:300px" :src="cubo.imagen" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{cubo.marca}}</h5>
              <p class="card-text">Modelo: {{cubo.modelo}}  Nombre: {{cubo.nombre}}</p>
              <router-link class="btn btn-info" :to="'/detalles/'+cubo.idCubo">Detalles</router-link>
            </div>
    </div>
  </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"MarcaCubo",
    data(){
      return{
        cubos:[]  
      }
    },
    mounted(){
      
      var marca=this.$route.params.marca;
     

      services.getCuboMarca(marca).then(res=>{
        this.cubos=res;
      })
    },
    watch:{
      '$route.params.marca'(nextVal,oldVal){
        if(oldVal != nextVal){
          var marca=this.$route.params.marca;
          services.getCuboMarca(marca).then(res=>{
            this.cubos=res;
          })
        }
      }
    }
}
</script>

<style>

</style>