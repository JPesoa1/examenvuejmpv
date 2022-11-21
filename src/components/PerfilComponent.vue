<template>
 <div v-if="usuario">
    <h1>Mi Perfil</h1>

    <label style="color: blue;">Nombre :{{usuario.nombre}}</label><br/>

    <label>Email :{{usuario.email}}</label>
</div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"PerfilComponent",
    data(){
        return{
            usuario:{}
        }
    },
    mounted(){
        services.getPerfil().then(res=>{
            this.usuario=res;
        })
    }
}
</script>

<style>

</style>