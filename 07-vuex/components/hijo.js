Vue.component('hijo',{

   data() {
      return{

      }
   },
   template: `
      <div>
       <button @click="$store.commit('aumentarEdad')">+</button>
      </div>
   `,


});