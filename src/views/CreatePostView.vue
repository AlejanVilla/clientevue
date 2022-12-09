<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Post</div>
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
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="state" id="estado" class="form-control"
                            maxlength="250" placeholder="Estado" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="contents" id="contenido" class="form-control"
                            maxlength="250" placeholder="Contenido" required>
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
    import { show_alert, enviarSolicitudP} from '../funciones';
    export default{
        data(){
            return{
                name:'',description:'',state:'',contents:'',url:'http://127.0.0.1:8000/api/posts'
            }
        }
        ,methods:{
            guardar(){
                event.preventDefault();
                if(this.name.trim() === ''){
                    show_alerta('Escribe el nombre', 'warning','nombre');
                }
                else if(this.description.trim() === ''){
                    show_alerta('Escribe la descripción', 'warning','descripcion');
                }
                else if(this.state.trim() === ''){
                    show_alerta('Escribe el estado', 'warning','estado');
                }
                else if(this.contents.trim() === ''){
                    show_alerta('Escribe el contenido', 'warning','contenido');
                }
                else{
                    var parametros= {name:this.name.trim(), description:this.description.trim(), state:this.state.trim(), contents:this.contents.trim()}
                    enviarSolicitudP('POST',parametros,this.url,'Post Guardado');
                }
            }
        }
    }
</script>