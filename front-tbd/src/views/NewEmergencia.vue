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

   <!-- <v-select
          v-model="newEmergencia.id_institution"
          :items="items"
          item-text="item.name"
          item-value="item.id"
          label="Seleccione institucion"
          required
    /> -->

    <v-text-field
      v-model="newEmergencia.id_institution"
      label="ID de institucion"
      required
    ></v-text-field>
        
    <v-text-field
      v-model="newEmergencia.finish_date"
      label="Fecha Termino (aaaa-mm-dd)"
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
    <v-alert
      :value="alert2"
      color="green"
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
    data: () => ({
      message:'',
            items:[],
            alert: false,
            alert2: false,
            valid: true,
            newEmergencia:{}
    }),

    methods: {
      //Función asíncrona para consultar los datos
          getData:async function(){
            try {
                let response = await this.$http.get('/api/v1/institutions');
                this.items  = response.data;                
            } catch (error) {
                console.log('error', error);
            }
        },
        //Función asíncrona para enviar datos
        send:async function(){
            this.message = '';
            if (this.newEmergencia.name == ''){
                this.message = 'Debes ingresar un nombre'
            }
            try {
                var result = await this.$http.post('/api/v1/emergencies', this.newEmergencia);
                let emergencia = result.data;                
                this.message = `Emergencia ${emergencia.name} Creada `;
                this.newEmergencia = {};
                this.alert2 =!this.alert2;     
                
            } catch (error) {
                console.log('error', error)
                this.message = 'Ocurrió un error'
                this.alert =!this.alert;     
            }
            
        },
        //Función para resetear las alertas y el formulario
        reset() {
            if(this.alert == true)
                this.alert =!this.alert;
            if(this.alert2 == true)
                this.alert2 =!this.alert2;
        this.$refs.form.reset()
        }  
    },
  }

</script>
