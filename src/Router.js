import {createRouter, createWebHistory} from "vue-router";
import CubosComponent from './components/CubosComponent.vue';
import DetallesCubo from './components/DetallesCubo.vue';
import MarcaCubo from './components/MarcaCubo.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegistroComponent from './components/RegistroComponent.vue';
import ComprasCoomponent from './components/CompraComponent.vue';
import PerfilComponent from './components/PerfilComponent.vue';


const routes=[
    {path:"",component:LoginComponent},
    {path:"/perfil",component:PerfilComponent},
    {path:"/compras",component:ComprasCoomponent},
    {path:"/registro",component:RegistroComponent},
    {path:"/cubos",component:CubosComponent},
    {path:"/detalles/:id",component:DetallesCubo},
    {path:"/marcacubo/:marca",component:MarcaCubo},
]

const router = createRouter ({
    history:createWebHistory(),
    routes:routes
})

export default router;