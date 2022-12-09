<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Editar Categoría</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" v-model="name" id="nombre" class="form-control"
                            maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="description" id="descripcion" class="form-control"
                            maxlength="250" placeholder="Descripción">
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { show_alerta, enviarSolicitud} from '../funciones';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    export default{
        data(){
            return{
                id:0,name:'',description:'',url:'http://127.0.0.1:8000/api/categories'
            }
        },
        mounted(){
            const route = useRoute();
            this.id = route.params.id;
            this.url = this.url+'/'+this.id;
            this.getCategory();
        }
        ,methods:{
            getCategory(){
                axios.get(this.url).then(
                    response => (
                        this.name = response.data['name'],
                        this.description = response.data['description']
                    )
                );
            },
            guardar(){
                event.preventDefault();
                if(this.name.trim() === ''){
                    show_alerta('Escribe el nombre', 'warning','nombre');
                }
                else if(this.description.trim() === ''){
                    show_alerta('Escribe la descripción', 'warning','descripcion');
                }
                else{
                    var parametros= {name:this.name.trim(), description:this.description.trim()}
                    enviarSolicitud('PUT',parametros,this.url,'Categoria Actualizada');
                }
            }
        }
    }
</script>