var $ = el => document.querySelector(el);

document.addEventListener("DOMContentLoaded", event => {
    
    event.preventDefault();

    let mostrarVista = document.getElementById('Alumno');

    let mostrarVistaDocente = document.getElementById('Docente');

    mostrarVista.addEventListener("click", e=>{
        
        e.stopPropagation();
        
        let modulo = "alumnos";

        fetch('public/vistas/alumno/alumnos.html').then( resp => resp.text()).then( resp => {

            document.getElementById('vista-alumnos').innerHTML = resp;
            let btnCerrar = $(".close");

            btnCerrar.addEventListener("click", event => {

                $(`#vista-${modulo}`).innerHTML = "";

            });

            let cuerpo = $("body"), script = document.createElement("script");

            script.src = `public/vistas/Alumno/${modulo}.js`;

            cuerpo.appendChild(script);
                
        });

    });

    mostrarVistaDocente.addEventListener("click", e=>{
        
        e.stopPropagation();
        
        let modulo = "docentes";

        fetch('public/vistas/alumno/docentes.html').then( resp => resp.text()).then( resp => {

            document.getElementById('vista-docentes').innerHTML = resp;
            let btnCerrar = $(".close");

            btnCerrar.addEventListener("click", event => {

                $(`#vista-${modulo}`).innerHTML = "";

            });

            let cuerpo = $("body"), script = document.createElement("script");

            script.src = `public/vistas/Alumno/${modulo}.js`;

            cuerpo.appendChild(script);
                
        });

    });

});