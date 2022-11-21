<template>
    <h1>Mis Compras</h1>
    <div v-if="compras">
  
        <li v-for="compra in compras" :key="compra">
            <hr/>
            <ul> IdCubo :{{compra.idCubo}}</ul>
            <ul>IdPedido :{{compra.idPedido}}</ul>
            <ul>IdUsuario: {{compra.idUsuario}}</ul>
            <ul>Fecha :{{compra.fechaPedido}}</ul>
        </li>

    </div>
    <div v-if="!compras">
        <h1>No tiene compras</h1>
        <router-link to="/cubos"></router-link>
    </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"CompraComponent",
    data(){
        return{
            compras:[]
        }
    },
    mounted(){
        services.getCompra().then(res=>{
            this.compras=res;
        })
    }
}
</script>

<style>

</style>