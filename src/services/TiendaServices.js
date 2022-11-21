import Global from "@/Global";
import axios from "axios";

export default class TiendaServices{
    getCubos(){
        return new Promise(function(resolve){
            var request="/api/Cubos"
            var url=Global.urlTienda+request;

            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            var request="/api/Cubos/Marcas"
            var url=Global.urlTienda+request;

            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }

    getCuboMarca(marca){
        console.log(marca + "aqui")
        return new Promise(function(resolve){
            var request="/api/Cubos/CubosMarca/"+marca
            var url=Global.urlTienda+request;

            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }

    getDetallesCubo(id){
        return new Promise(function(resolve){
            var request="/api/ComentariosCubo/GetComentariosCubo/"+id;
            var url=Global.urlTienda+request;

            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }


    postLogin(email,password){
        return new Promise(function(resolve){
            var request="api/Manage/Login"
            var url=Global.urlTienda+request;
            var user = {
                email:email,
                password:password
            }
            var json = JSON.stringify(user);
            var header = {
                'Content-Type': 'application/json',
              }
            axios.post(url,json, {headers:header}).then(res=>{
                resolve(res.data.response)
            })
        })
    }


    postRegistro(nombre,email,password){
        return new Promise(function(resolve){
            var request="api/Manage/RegistroUsuario"
            var usuario={
                idUsuario:0,
                nombre:nombre,
                email:email,
                pass:password
            }
            var json = JSON.stringify(usuario);
            var url=Global.urlTienda+request;
            var header = {
                'Content-Type': 'application/json',
            }
            axios.post(url,json, {headers:header}).then(res=>{
                resolve(res.data)
            })
        })
    }

    getCompra(){
        return new Promise(function(resolve){
            var request="/api/Compra/ComprasUsuario"
            var token = localStorage.getItem("token");
            var url=Global.urlTienda+request;
            var header = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            }
            axios.get(url,{headers:header}).then(res=>{
                resolve(res.data)
            })
        })
    }

    postCompra(id){

        return new Promise(function(resolve){
            var request="api/Compra/InsertarPedido/"+id;
            var token = localStorage.getItem("token");
            var url=Global.urlTienda+request;
            var header = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            }
            axios.post(url,"",{headers:header}).then(res=>{
                resolve(res.data)
            })
        })

    }

    getPerfil(){
        return new Promise(function(resolve){
            var request="api/Manage/PerfilUsuario";
            var token = localStorage.getItem("token");
            var url=Global.urlTienda+request;
            var header = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            }
            axios.get(url,{headers:header}).then(res=>{
                resolve(res.data)
            })
        })
    }
}