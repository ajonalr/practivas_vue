const app = new Vue({
   el: '#app',
   data: {
      titulo: 'Hola Yo Soy El Computed',
      contador: 0
   },
   computed: {
      invertido() {
         return this.titulo.split('').reverse().join('');
      },
      color() {
         return {
            'bg-danger': this.contador < 10,
            'bg-warning': this.contador > 10 && this.contador < 20,
            'bg-info': this.contador > 19 && this.contador < 50,
            'bg-success': this.contador >= 50,
         }
      }
   },
})