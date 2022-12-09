<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Categoría</div>
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
    import { show_alert, enviarSolicitud} from '../funciones';
    export default{
        data(){
            return{
                name:'',description:'',url:'http://127.0.0.1:8000/api/categories'
            }
        }
        ,methods:{
            guardar(){
                event.preventDefault();
                if(this.name.trim() === ''){
                    show_alert('Escribe el nombre', 'warning','nombre');
                }
                else if(this.description.trim() === ''){
                    show_alert('Escribe la descripción', 'warning','descripcion');
                }
                else{
                    var parametros= {name:this.name.trim(), description:this.description.trim()}
                    enviarSolicitud('POST',parametros,this.url,'Categoria Guardada');
                }
            }
        }
    }
</script>