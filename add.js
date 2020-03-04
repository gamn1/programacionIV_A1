document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.querySelector("#CboDe").value,
            a = document.querySelector("#CboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir');
  
        let 
        monedas = {
            "dolar":1,
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.9,
            "cordoba":34.19},
            longitudes = {
              "mm": 1000,
              "cm": 100,
              "mt": 1,
              "km": 0.001,
              "milla": 0.000621371};
  
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "longitud"){
          $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2) }`;
       
        };
    })
  });
  
  //llenar los select box 
  function seleccionar_opcion() {
    let opcion = document.getElementById('cboConvertir'),
    de1 = document.getElementById('CboDe'),
    a1 = document.getElementById('CboA');
    //limpiar antes de actualizar
    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion.value == "moneda"){
      var  array = ["dolar!Dolar","euro!Euro","quetzal!Quetzal","lempira!Lempira","cordoba!Cordoba"]; 
    } else if(opcion.value == "longitud"){
      var array = ["mm!MM","cm!CM","mt!MT","km!KM","milla!Milla"];
   
    };
  
    for(var i=0;i<array.length;i++){ var repair = array[i].split("!");var newop = document.createElement("option");newop.value = repair[0]
     newop.innerHTML = repair[1];de1.options.add(newop);
    };
    for(var i=0;i<array.length;i++){var repair = array[i].split("!");var newop = document.createElement("option");newop.value = repair[0] 
    newop.innerHTML = repair[1];a1.options.add(newop);
    };
};