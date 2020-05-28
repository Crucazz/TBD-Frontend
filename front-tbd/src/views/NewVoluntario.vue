<template>
<div class="container">
    <h1>Agregar un voluntario</h1>
    <form>
        <div>
            <label for="name">Nombre</label>
        <input type="text" id="name" v-model="newVoluntario.name">
        </div>
        <div>
            <button type="button" @click="send">Crear</button>
        </div>
        <div class="info">
            <h2>Objeto</h2>
            <code>{{newVoluntario}}</code>
            <p class="message">
                {{message}}
            </p>
        </div>
    </form>

</div>
</template>
<script>
export default {
    data(){
        return{
            message:'',
            newVoluntario:{}
        }
    },
    methods:{
        send:async function(){
            this.message = '';
            if (this.newVoluntario.name == ''){
                this.message = 'Debes ingresar un nombre'
            }
            try {
                var result = await this.$http.post('/api/v1/volunteers', this.newVoluntario);
                let voluntario = result.data;
                this.message = `Se creó un nuevo voluntario con id: ${voluntario.id}`;
                this.newVoluntario = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }     
        }
    }
}

</script>

<style lang="scss">

code{
    padding: .5rem 1rem;
    color:white;
    background:#444;
    font-size: 1rem;
    width: 12rem;
    display:inline-block;

}
p.message{
    margin:0 auto;
    width: 12rem;
    border:solid 1px rgba(0,0,0,0.25);
    padding: .5rem 1rem;
    font-weight: bold;
}
</style>