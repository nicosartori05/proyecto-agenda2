<template>
  <div>
    <h2>Cargar listado de tareas</h2>
    <p>
      Tener en cuenta que el nombre del responsable solo admite 10 caracteres y
      el campo de tarea un máximo de 100.
    </p>
    <!-- agregar formulario de carga de tareas -->
    <v-form ref="form" v-model="valid" @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="tareaObj.responsable"
              :rules="responsableRules"
              :counter="10"
              label="Responsable"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-textarea
              v-model="tareaObj.tarea"
              :rules="tareaRules"
              name="input-7-4"
              label="Tarea"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        type="submit"
        @click="guardarTarea()"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-form>
    <v-alert type="success" v-if="!mensajeError && tareaGuardada">
      Tarea cargada correctamente.
    </v-alert>
    <v-alert type="error" v-if="mensajeError">
      No se cargó la tarea, verifica haber ingresado los datos correctamente.
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      mensajeError: false,
      tareaGuardada: false,
      tareaObj: {
        responsable: "",
        tarea: "",
        fecha: "",
      },
      responsableRules: [
        (v) => !!v || "El nombre es requerido",
        (v) =>
          v.length <= 10 || "El campo debe tener como máximo 10 caracteres",
      ],
      tareaRules: [
        (v) => !!v || "El campo es requerido",
        (v) =>
          v.length <= 100 || "El campo debe tener como máximo 100 caracteres",
      ],
    };
  },
  methods: {
    guardarTarea() {
      // Lógica para guardar la tarea
      const date = new Date();
      this.tareaObj.fecha = date.toLocaleString();
      // Guardar en la propiedad fecha del objeto tareaObj, la fecha y hora del momento en que se guardó

      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          // Validar el formulario
          const tareaGuardada = {
            fecha: this.tareaObj.fecha,
            responsable: this.tareaObj.responsable,
            tarea: this.tareaObj.tarea,
          };
          // Guardamos en un nuevo objeto toda la información para luego pushearla al array correspondiente

          let lista = [];
          if (localStorage.work) {
            lista = JSON.parse(localStorage.getItem("work"));
            // Si existe la key "work", pedimos que en el array lista nos guarde lo que teníamos en localStorage
          }
          lista.push(tareaGuardada);
          // Luego de meter en el array lista lo que teníamos en localStorage, le pusheamos el objeto que habíamos guardado anteriormente (tareaGuardada)
          localStorage.setItem("work", JSON.stringify(lista));
          // Para finalizar, sobreescribimos la key "work" con la lista actualizada y la guardamos en localStorage.
          this.tareaObj = { fecha: "", responsable: "", tarea: "" };
          // Igualamos todas las propiedades del formulario a una cadena vacía
          this.tareaGuardada = true;
          setTimeout(() => {
            this.tareaGuardada = false;
          }, 3000); // 3000 milisegundos = 3 segundos
        } else {
          this.mensajeError = true;
          setTimeout(() => {
            this.mensajeError = false;
          }, 3000); // 3000 milisegundos = 3 segundos
        }
      });
    },
  },
};
</script>
