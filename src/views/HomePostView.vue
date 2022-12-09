<template>  
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-resposive">
        <table class="table table-bordered table-hover">
          <thead><tr><th>#</th><th>Nombre</th><th>Descripción</th><th>State</th><th>Contents</th><th>Fecha Creacion</th><th>Acciones</th></tr></thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="pos, i in posts" :key="pos.id">
              <td>{{ (i+1) }}</td>
              <td>{{pos.name}}</td>
              <td>{{pos.descripcion}}</td>
              <td>{{pos.state}}</td>
              <td>{{pos.contents}}</td>
              <td>{{pos.created_at}}</td>
              <td>
                <router-link :to="{path:'editp/'+pos.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link> &nbsp;
                <button class="btn btn-danger" v-on:click="eliminarP(pos.id, pos.name )">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </td>             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { confirmarP } from '../funciones';
  export default{
    data(){
      return{ posts:null}
    },
    mounted(){
      this.getPost();
    },
    methods:{
      getPost(){
        axios.get('http://127.0.0.1:8000/api/posts').then(
          response => (
            this.posts = response.data
          )
        );
      },
      eliminarP(id,nombre){
        confirmarP(id,nombre);
      }
    }
  }
   
</script>