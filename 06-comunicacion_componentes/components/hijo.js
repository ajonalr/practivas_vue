Vue.component("hijo", {
  props: ["numero"],
  data() {
    return {
       nombre: 'DeCoDev'
    };
  },

  template: `
  <div class="p-5 bg-success text-white">
      <h1>Hijo</h1>
       <p>Yo soy el Numero {{numero}}</p>

      <h4>Nombre: {{nombre}}</h4>
   </div>

  `,
  mounted() {
      this.$emit('nombreHijo', this.nombre);
  }
});
