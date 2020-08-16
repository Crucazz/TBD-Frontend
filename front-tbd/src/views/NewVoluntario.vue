<template>

    
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="newVoluntario.name"      
      label="Nombre"
      required
    ></v-text-field>


    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="send"
    >
      Crear 
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar
    </v-btn>
    <v-alert
      :value="alert"
      color="pink"
      dark
      border="top"
      transition="scale-transition"
    >
        <p class="message">
        {{message}}
        </p>
    </v-alert>
  </v-form>

</template>


<script>
export default {

    data(){
        return{
          //Lista de variables a utilizar
            alert: false,
            valid: true,
            message:'',
            newVoluntario:{}
        }
    },
    methods:{
        //Funcion asincrona para enviar informacion
        send:async function(){
            this.message = '';
            if (this.newVoluntario.name == ''){
                this.message = 'Debes ingresar un nombre'
            }
            try {
                var result = await this.$http.post('/api/v1/volunteers', this.newVoluntario);
                let voluntario = result.data;
                this.message = `Voluntario ${voluntario.name} Creado `;
                this.newVoluntario = {};
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error, NO se creo Voluntario'
            }
            this.alert =!this.alert;
        },
        //Funcion para resetear formulario
        reset () {
            if(this.alert == true)
                this.alert =!this.alert;
        this.$refs.form.reset()
      },
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