<template>
  <div id="home">
    <picture>

      <source srcset="../assets/img/programacion-agenda-320px.jpg" media="(min-width:320px) and (max-width:767px)">
      <source srcset="../assets/img/programacion-agenda-768px.jpg" media="(min-width:768px) and (max-width:1199px)">
      <source srcset="../assets/img/programacion-agenda-1200px.jpg" media="(min-width:1200px)">

      <img src="../assets/img/programacion-agenda.jpg" alt="agenda-siendo-escrita">
    </picture>
    <h2>Bienvenidos a Mi Agenda</h2>
    <p>En esta Aplicacion web, vas a poder llevar <strong>registro de todas tus tareas diarias</strong>, para asi, poder hacerles seguimiento y no dejar nada por hacer.</p>
    <p><strong>En el menu ubicado en la esquina superior izquierda</strong>, vas a poder visualizar las siguientes opciones:</p>
    <ul>
      <li><strong>Home</strong> - La pagina en la que estas ubicado actualmente</li>
      <li><strong>Cargar tareas</strong> - Es la seccion donde vas a ingresar las distintas tareas por realizar</li>
      <li><strong>Mostrar tareas</strong> - Es donde vas a visualizar las tareas pendientes, con fecha y hora de creacion, como asi tambien las tareas finalizadas.</li>
    </ul>

  </div>
</template>

<script>

  export default {
    data() {
      return {

      };
    },
  }
</script>
<style scoped>
#home h2,p, li{
  padding: 0rem 1rem;
}
h2{
  font-size: 3rem;
}
h2{
  text-align: center;
  margin: 1rem 0;
}
#home img{
  width: 100%;
}
</style>

