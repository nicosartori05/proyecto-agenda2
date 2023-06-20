<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/cargar">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cargar tareas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/mostrar">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Mostrar tareas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Agrega más items de la lista según tus rutas -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app id="menu">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><h1>Mi Agenda</h1></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- Contenido principal de la página -->
        <router-view></router-view>
    </v-main>

      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Mi Agenda</strong>
        </v-col>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped>

.v-main {
  margin: 0;
}
.v-footer{
  margin-top: 1rem;
}
</style>
