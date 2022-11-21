<template>
  <div v-if="cubos">
    <table style="text-align:center">
        <thead>
            <tr>
                <th>NOMBRE</th>
                <th>MODELO</th>
                <th>MARCA</th>
                <th>IMAGEN</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cubo in cubos" :key="cubo">
                <td>{{cubo.nombre}}</td>
                <td>{{cubo.modelo}}</td>
                <td>{{cubo.marca}}</td>
                <td><img style="width: 200px; height: 200px" :src="cubo.imagen"/></td>
                <td><button @click="comprar(cubo.idCubo)">Comprar</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
  name:"CubosComponent",
  data(){
    return{
      cubos:[]
    }
  },
  mounted(){
    services.getCubos().then(res=>{
      this.cubos=res;
    })
  },
  methods:{
    comprar(id){
      services.postCompra(id).then(res=>{
        console.log(res)
        this.$router.push("/compras")
      })
      
    }
  }

}
</script>

<style>

</style>