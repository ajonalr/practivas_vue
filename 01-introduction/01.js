const vue = new Vue({
  el: "#app",
  data: {
    titulo: "Mi Listado de Frutas",
    frutas: [
      { nombre: "Pera", estado: true, stock: 15 },
      { nombre: "Manzana", estado: true, stock: 20 },
      { nombre: "Platano", estado: false, stock: 0 },
      { nombre: "Papaya", estado: false, stock: 2 },
      { nombre: "Sandia", estado: true, stock: 0 },
    ],
    nuevaFruta: "",
    stockFruta: 0,
    total: 0,
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        estado: true,
        stock: this.stockFruta,
      });
      this.nuevaFruta = "";
      this.stockFruta = 0;
    },
  },
  computed: {
    sumarFrutas() {
        this.total = 0;
        for (fruta of this.frutas){
          this.total += fruta.stock;
        }

        return this.total;
    },
  },
});
