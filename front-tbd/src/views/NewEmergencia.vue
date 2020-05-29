<template>

    
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="newEmergencia.name"      
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="newEmergencia.description"
      label="Descripcion"
      required
    ></v-text-field>

    <v-select
          v-model="newEmergencia.idInstitution"
          :items="items"
          item-text="id"
          item-value="name"
          label="Seleccione institucion"
          required
        ></v-select>
     


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
            message:'',
            items:[],
            alert: false,
            valid: true,
            newEmergencia:{}
        }
    },
    methods:{
        getData: async function(){
            try {
                let response = await this.$http.get('/api/v1/institutions');
                this.items  = response.data;
                
            } catch (error) {
                console.log('error', error);
            }
        },
        send:async function(){
            this.message = '';
            if (this.newEmergencia.name == ''){
                this.message = 'Debes ingresar un nombre'
            }
            try {
                var result = await this.$http.post('/api/v1/emergencies', this.newEmergencia);
                let emergencia = result.data;                
                this.message = `Voluntario ${emergencia.name} Creado `;
                this.newEmergencia = {};
                
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
            this.alert =!this.alert;     
        },
        reset () {
            if(this.alert == true)
                this.alert =!this.alert;
        this.$refs.form.reset()
        }
    }
}

</script>
