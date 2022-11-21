<template>
   <div v-if="detalleCubo">
        <h1>Opiniones de nuestros usuarios</h1>
        <div v-for="detalles in detalleCubo" :key="detalles"  style="text-align: center;" >
            <hr/>
            <p>{{detalles.comentario}}</p>
            <h3>{{detalles.fechaComentario}}</h3>
           
        </div>
  </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
  name:"DetallesCubo",
  data(){
    return{
      detalleCubo:[]
    }
  },
  mounted(){
    var id=this.$route.params.id;
    services.getDetallesCubo(id).then(res=>{
      this.detalleCubo=res;
    })
  }
}
</script>

<style>

</style>