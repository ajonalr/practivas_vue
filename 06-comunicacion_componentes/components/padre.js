Vue.component("padre", {
  data() {
     return {
      numeroPadre: 15,
      nombrepadre: ''
     }
  },
  template: `<div class="p-5 bg-dark text-white">
   <h1>Padre: {{numeroPadre}}</h1>
   <h1>Nombre: {{nombrepadre}}</h1>

   <button class="btn btn-primary" @click="numeroPadre++">+</button>
   <hijo :numero="numeroPadre" @nombreHijo="nombrepadre = $event"></hijo>
  </div>`,
});
