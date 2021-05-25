Vue.component("contador", {
  data() {
    return {
      contador: 0,
    };
  },
  template: //html
  `<div>
   <h1>Contador: {{contador}}</h1>
   <button @click="contador++"> + </button>
   </div>`,
});
