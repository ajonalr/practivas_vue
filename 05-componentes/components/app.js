Vue.component("saludo", {
  data: function () {
    return {
      saludo: "Hola Desde El Componente",
    };
  },


  template: //html
  `
   <div>
 
    <h1>DeCoDev</h1>
    <h3>{{saludo}}</h3>
    
    </div>
    `,
});

