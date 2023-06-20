<template>
    <div id="mostrarTareas">
      <h2>Mostrar listado de tareas</h2>
      <p>En esta seccion, vas a visualizar las tareas pendientes y las finalizadas.</p>
      <div id="taskList">
        <ul>
          <li v-for="(item, index) in lista" :key="index" class="card">
            <p>{{ index }}: {{ item.fecha }}</p>
            <p>
              <span class="nombrePost">{{ item.responsable }}</span>
            </p>
            <p class="Orden">{{ item.tarea }}</p>
  
            <button class="botonFinalizar" @click="finalizar(item, index)">
              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark> mdi-check </v-icon>
              </v-btn>
            </button>
  
            <button class="botonBorrar" @click="borrar(index)">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </button>
          </li>
        </ul>
  
        <h4>Tareas Finalizadas</h4>
        <br />
        <p v-if="contador == 0">No hay tareas finalizadas para mostrar</p>
        <div v-else-if="contador > 0">
          <h5>cantidad de tareas finalizadas: {{ contador }}</h5>
          <ul>
            <li
              v-for="(itemT, indexT) in listaTerminadas"
              :key="indexT"
              class="cardTerminadas"
            >
              <p>{{ indexT }}: {{ itemT.fecha }}</p>
              <p>
                <span class="nombrePost">{{ itemT.responsable }}</span>
              </p>
              <p class="Orden">{{ itemT.tarea }}</p>
  
              <button class="botonBorrar" @click="borrarFinalizar(itemT, indexT)">
                <v-btn class="mx-2" fab dark small color="primary">
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contador: 0,
        lista: [],
        listaTerminadas: [],
      };
    },
    created() {
      // Verificar si hay datos guardados en el LocalStorage
      if (localStorage.work) {
        this.lista = JSON.parse(localStorage.getItem("work"));
      }
      if (localStorage.workEnd) {
        this.listaTerminadas = JSON.parse(localStorage.getItem("workEnd"));
        this.contador = this.listaTerminadas.length;
      }
    },
    methods: {
      borrar: function (index) {
        this.lista.splice(index, 1);
        localStorage.setItem("work", JSON.stringify(this.lista));
      },
      finalizar: function (item, index) {
        this.contador++;
        this.listaTerminadas.push(item);
        localStorage.setItem("workEnd", JSON.stringify(this.listaTerminadas));
        this.lista.splice(index, 1);
        localStorage.setItem("work", JSON.stringify(this.lista));
      },
      borrarFinalizar: function (item, index) {
        this.listaTerminadas.splice(index, 1);
        this.contador--;
        localStorage.setItem("workEnd", JSON.stringify(this.listaTerminadas));
      },
    },
  };
  </script>
  

<style scoped>
#mostrarTareas{
    padding: 1rem;
}
#taskList ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2em;
}
#taskList ul li{
    margin: 1rem;
}
.card{
    display: flex;
    flex-direction: column;
    background-color: lightyellow;
    margin: 1em 1em;
    padding: 1em;
    position: relative;
    height: 350px;
    width: 300px;
    box-shadow: -1px 1px 3px 1px grey;
}

.botonFinalizar img{
    width: 100%;

}
.botonFinalizar{
    width: 10%;
    position: absolute;
    bottom: 1em;
    left: 1em;
    /* border-radius: 10px;
    padding: .5em;
    background-color: lightgreen;
    border: none; */

}
.botonBorrar{
    width: 10%;
    position: absolute;
    top: 1em;
    right: 1em;
    /* border-radius: 10px;
    padding: .5em;
    background-color: rgb(252, 85, 85);
    border: none; */
}
.botonBorrar img{
    width: 90%;
}

.nombrePost{
    font-weight: 600;
    font-size: 1.3em;
}

.Orden{
    overflow-wrap: break-word;
    margin-bottom: 3em;
}

.cardTerminadas{
    display: flex;
    flex-direction: column;
    background-color: lightgreen;
    margin-top: 1em 1em;
    padding: 1em;
    position: relative;
    height: 350px;
    width: 300px;
    box-shadow: -1px 1px 3px 1px grey;
}
.card p, .cardTerminadas p{
    margin-top: .5em;
}

#taskList h4{
    background-color: black;
    margin: 1em 0;
    padding: .6em;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
#taskList p{
    margin-bottom: 2em;
}
h5{
    text-align: center;
}
</style>