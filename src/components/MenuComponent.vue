<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/cubos">Cubos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/compras">Compras</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/perfil">Perfil</router-link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li v-for="marca in marcas" :key="marca"><router-link class="dropdown-item" :to="'/marcacubo/'+marca">{{marca}}</router-link></li>
                 
                </ul>
                </li>
               
            </ul>
            
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import TiendaServices from '@/services/TiendaServices';
const services = new TiendaServices();
export default {
    name:"MenuComponent",
    data(){
        return{
            marcas:[]
        }
    },
    mounted(){
        services.getMarcas().then(res=>{
            this.marcas=res;
        })
    }
}
</script>

<style>

</style>