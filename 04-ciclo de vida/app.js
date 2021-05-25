const app = new Vue({
  el: "#app",
  data: {
    saludo: "Hola Soy el Saludo",
  },

  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Create");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeDestroy(){
   console.log('Before  Destruido');

  },
  destroyed() {
     console.log('Componete Destruido');
  },
  methods: { 
    destruir() {
      this.$destroy();
    }
  },
});
