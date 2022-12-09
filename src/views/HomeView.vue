<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-resposive">
        <table class="table table-bordered table-hover">
          <thead><tr><th>#</th><th>Nombre</th><th>Descripción</th><th>Fecha Creacion</th><th>Acciones</th></tr></thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="cat, i in categories" :key="cat.id">
              <td>{{ (i+1) }}</td>
              <td>{{cat.name}}</td>
              <td>{{cat.descripcion}}</td>
              <td>{{cat.created_at}}</td>
              <td>
                <router-link :to="{path:'edit/'+cat.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link> &nbsp;
                <button class="btn btn-danger" v-on:click="eliminar(cat.id, cat.name)">
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
  import { confirmar } from '../funciones';
  export default{
    data(){
      return{ categories:null}
    },
    mounted(){
      this.getCategory();
    },
    methods:{
      getCategory(){
        axios.get('http://127.0.0.1:8000/api/categories').then(
          response => (
            this.categories = response.data
          )
        );
      },
      eliminar(id,nombre){
        confirmar(id,nombre);
      }
    }
  }

  
</script>


