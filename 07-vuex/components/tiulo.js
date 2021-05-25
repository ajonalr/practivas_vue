Vue.component('titulo',{

   data() {
      return{

      }
   },
   template: `
      <div>
        <h1>Edad: {{$store.state.edad}} </h1>
        <h1>Numero: {{$store.state.numero}} </h1>
        <hijo></hijo>
      </div>
   `,


});