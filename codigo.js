document.querySelector("#seleccionIngresar1").style.display="none"
document.querySelector("#seleccionAppDocente").style.display="none"
document.querySelector("#seleccionNivel").style.display="none"
document.querySelector("#seleccionAppAlumno").style.display="none"
document.querySelector("#cargarEjercicio").style.display="none"
document.querySelector("#BuscarAlumnoNivel").style.display="none"
document.querySelector("#VerEjerciciosAlumnos").style.display="none"
document.querySelector("#VolverAtras").style.display="block"

document.querySelector("#btnSeccionIngresar").addEventListener("click", mostrarSeleccion)
function mostrarSeleccion(){
    document.querySelector("#seleccionIngresar1").style.display="block"
    document.querySelector("#seleccionRegistro").style.display="none"
    document.querySelector("#seleccionIngresar").style.display="none"
    document.querySelector("#msj").style.display="none"

}
document.querySelector("#btnCargarEjercicio").addEventListener("click", mostrarCargaEjercicios)
function mostrarCargaEjercicios(){
    document.querySelector("#cargarEjercicio").style.display="block"
    document.querySelector("#seleccionNivel").style.display="none"
    document.querySelector("#BuscarAlumnoNivel").style.display="none"
    
    

}
document.querySelector("#btnBuscarAlumnoNivel").addEventListener("click", mostrarBuscarNivel)
function mostrarBuscarNivel(){
    document.querySelector("#BuscarAlumnoNivel").style.display="block"
    document.querySelector("#seleccionNivel").style.display="none"
    document.querySelector("#cargarEjercicio").style.display="none"
    
    

}
document.querySelector("#btnVerEjercicios").addEventListener("click", mostrarEJalumnos)
function mostrarEJalumnos(){
  mostrarEjerciciosAlumnos()
  document.querySelector("#VerEjerciciosAlumnos").style.display="block"
    
  
  
    

}

document.querySelector("#btnEntregas").addEventListener("click", mostrarEntregas)
function mostrarEntregas(){
  document.querySelector("#divEntrega").style.display="block"
    

}


let letra = document.getElementById("letra");
let may = document.getElementById("may");
let num = document.getElementById("num");
let largo = document.getElementById("largo");
let miIngreso = document.getElementById("cts"); 
 

miIngreso.onfocus = function() {
document.getElementById("msj").style.display = "block";
}

//Cuando la persona haga click fuera del campo de contraseña
miIngreso.onblur = function() {
document.getElementById("msj").style.display = "none";
}

// Cuando la persona escriba en el campo de contraseña muestre msj
miIngreso.onkeyup = function() {
// Validar minúsculas
let lowerCaseLetters = /[a-z]/g;
if(miIngreso.value.match(lowerCaseLetters)) {
letra.classList.remove("no");
letra.classList.add("si");
} else {
letra.classList.remove("si");
letra.classList.add("no");

}


// Validar mayuscula 
let upperCaseLetters = /[A-Z]/g;
if(miIngreso.value.match(upperCaseLetters)) {
may.classList.remove("no");
may.classList.add("si");
} else {
may.classList.remove("si");
may.classList.add("no");

}

// Validar números
let nums = /[0-9]/g;
if(miIngreso.value.match(nums)) {
num.classList.remove("no");
num.classList.add("si");
} else {
num.classList.remove("si");
num.classList.add("no");

}

// Validar largo
if(miIngreso.value.length >= 4) {
largo.classList.remove("no");
largo.classList.add("si");
} else {
largo.classList.remove("si");
largo.classList.add("no");

}

}



class Registro {
    constructor(nombre1, nombreUsuario1, contraseña1, tipo1, docentes1, nivel1) {
      this.nombre = nombre1;
      this.nombreUsuario = nombreUsuario1;
      this.contraseña = contraseña1;
      this.tipo = tipo1;
      this.docentes = docentes1
      this.nivel = nivel1      
    }
    cambiarNivel(NuevoNivel){
      if(this.nivel == "Avanzado"){
            if(NuevoNivel == "Inicial" || NuevoNivel =="Intermedio"){
              alert("No se puede cambiar a un nivel anterior");
            }
            else{
              this.nivel = NuevoNivel;
              alert("Nivel cambiado");             
                           
            }
          }
          else{
              this.nivel = NuevoNivel;
              alert("Nivel cambiado");
              
                                      
         }
      
      }
      
  }




  
  let Registrados = [];
  
  let registro3 = new Registro("Juan","JuanPe","password3","Alumno","prof1","Inicial");
    console.log(registro3);
    Registrados.push(registro3);
let registro4 = new Registro("usuarioIntermedio","uIntermedio","password3","Alumno","prof1","Intermedio");
    console.log(registro4);
    Registrados.push(registro4);
let registro5 = new Registro("usuarioAvanzado","uAvanzado","password3","Alumno","prof1","Avanzado");
    console.log(registro5);
    Registrados.push(registro5);

let registro6 = new Registro("Pedro","Pedri","password4","Docente");
    console.log(registro6);
    Registrados.push(registro6);
    armarComboDocentes();

  document.querySelector("#btnregistro").addEventListener("click", agregarRegistrado);

     function agregarRegistrado() {

    let nombreCampo = document.querySelector("#txtNombre").value;
    let nombreUsuarioCampo = document.querySelector("#nombreu").value;
    let miIngreso = document.getElementById("cts"); 
    let aparece = buscarElemento(Registrados, "nombreUsuario", nombreUsuarioCampo);
    
     

  

  let lowerCaseLetters = /[a-z]/g;
  

  // Validar mayuscula 
  let upperCaseLetters = /[A-Z]/g;
 
  // Validar números
  let nums = /[0-9]/g;
  
  
   
    if (!aparece && miIngreso.value.match(lowerCaseLetters) && miIngreso.value.match(upperCaseLetters) && miIngreso.value.match(nums) && miIngreso.value.length >= 4) {
      
  
      let tipoCampo = document.querySelector("#slcTipo").value;
      let docenteCampo = document.querySelector("#selectDos").value;
      let nivelCampo= "Inicial"
      let registro = new Registro(
        nombreCampo,
        nombreUsuarioCampo,
        miIngreso.value,
        tipoCampo,
        docenteCampo,
        nivelCampo,
      );
      Registrados.push(registro);
      console.log(Registrados);
      document.querySelector("#pResultado").innerHTML= "¡Quedaste registrado exitosamente en la aplicacion!"
      
    } else {
      alert("Nombre de usuario ya existe o contraseña incorrecta");
    }
  

}

    function buscarElemento(arrElementos, propiedad, dato) {
    let existe = false;
    let elemento;
    let elementoActual
    for (let i = 0; i < arrElementos.length; i++) {
      elemento = arrElementos[i];
      if (elemento[propiedad] === dato) {
        existe = true;
        elementoActual = elemento;        
        break;
      }
    }
    
    return elementoActual;
  }
  
  document.getElementById('slcTipo').addEventListener('change', function () {
    valor = document.querySelector("#slcTipo").value;
    if (valor == "Alumno"){
        var nuevoselect = document.getElementById("selectDos");
        nuevoselect.style.display = "block";
    }
    else{
      var nuevoselect = document.getElementById("selectDos");
        nuevoselect.style.display = "none";
    }


});


document.querySelector("#btnIngresar1").addEventListener("click", ingresar);
  
function ingresar(){
  let usuarioLogin = document.querySelector("#txtBusquedaUSU").value;
  let passLogin = document.querySelector("#txtBusquedaCONTRA").value;
  console.log(usuarioLogin)
  console.log(passLogin)
  passvalida = compararDatos(Registrados, "nombreUsuario", usuarioLogin, "contraseña", passLogin);
  if(passvalida == true ){
      alert("Contraseña Correcta")
 usuarioLogeado = usuarioLogin;
  }
else{
 alert("Contraseña incorrecta")

}


}


function compararDatos(arrElementos, usuario, usuarioD,pass,passD) {
  let existe = false;
  for (let i = 0; i < arrElementos.length; i++) {
    const elemento = arrElementos[i];
    if (elemento[usuario].toLowerCase() === usuarioD.toLowerCase() && elemento[pass] === passD) {
        console.log("Usuario y contraseñas correctos");
        var nuevoselect = document.getElementById("seleccionIngresar1");

       var mostrarProfesor = document.getElementById("seleccionAppDocente");
       var mostrarAlumno = document.getElementById("seleccionAppAlumno");
       if (elemento["tipo"] == "Docente")
       {
      nuevoselect.style.display = "none";
           mostrarProfesor.style.display="block";

           mostrarEjercicios();


       }
       else{
      nuevoselect.style.display = "none";
           mostrarAlumno.style.display="block";
       }
      existe = true;
      break;
    }
    else{
            console.log("Usuario y contraseñas no correctas")
    }
  }
  return existe;
}


function obtenerObjeto(arrElementos, propiedad, dato) {
  let objeto = null;
  for (let i = 0; i < arrElementos.length; i++) {
    const elemento = arrElementos[i];
    if (elemento[propiedad] === dato) {
      objeto = elemento;
      break;
    }
  }
  return objeto;
}


document.querySelector("#btnBuscar").addEventListener("click", buscaralumno);  
function buscaralumno() {
  let busquedaAlumno = document.querySelector("#txtNivelalumnos").value;
  let alumnonivel = obtenerObjeto(Registrados, "nombre", busquedaAlumno);
  if (alumnonivel !== null) {
    document.querySelector("#pResultadoNivel").innerHTML = `Nombre:${alumnonivel.nombre}<br>
    Nivel:${alumnonivel.nivel}<br>`
    document.querySelector("#seleccionNivel").style.display="block"
  } else {
    document.querySelector("#pResultadoNivel").innerHTML = "No tienes a ese alumno ";
  }
  document.querySelector("#btnAsignarNivel").addEventListener("click", asignarNivel);


 
 
}



function asignarNivel() {
  let usuarioAcambiar = document.querySelector("#txtNivelalumnos").value;
  let alumno = DevolverAlumno(Registrados,"nombre", usuarioAcambiar); 
  let nuevoNivel = document.querySelector("#slcNivel").value;  
  alumno.cambiarNivel(nuevoNivel) 
  console.log(alumno)
 document.querySelector("#pResultadoNivelguardado").innerHTML= "¡Nivel asignado correctamente!"
}
function DevolverAlumno(arrElementos, propiedad, dato) {
    let existe = false;
    let elemento;
    let elementoActual
    for (let i = 0; i < arrElementos.length; i++) {
      elemento = arrElementos[i];
      if (elemento[propiedad] === dato) {
        existe = true;
        elementoActual = elemento;
        break;
      }
    }

    return elementoActual;
  }

document.querySelector("#btnVolver").addEventListener("click", mostrarLogin)
document.querySelector("#btnVolverDos").addEventListener("click", mostrarLogin)
function mostrarLogin(){
    var nuevoselect = document.getElementById("seleccionRegistro");
    nuevoselect.style.display = "block";
    
    var seleccionAppAlumno = document.getElementById("seleccionAppAlumno");
    seleccionAppAlumno.style.display = "none";
   
    var seleccionAppDocente = document.getElementById("seleccionAppDocente");
    seleccionAppDocente.style.display = "none";
   
    var ingresar = document.getElementById("seleccionIngresar");
    ingresar.style.display = "block";
    var tablaEj = document.getElementById("tablaEjercicios");
    tablaEj.style.display="block";
}

let arrEjercicios = [];


class Ejercicio { 
    constructor (NivelE, tituloE, letraE, imagenE) {
      this.Nivel = NivelE;
      this.titulo = tituloE;
      this.letra = letraE;
      this.imagen = imagenE;

    }
  }

let ejercicio1 = new Ejercicio("Inicial", "Ejercicio 1", "Letra del ejercicio 1", "imgs/Ejercicio1.jpg")
arrEjercicios.push(ejercicio1);
let ejercicio2 = new Ejercicio("Inicial", "Ejercicio inicial 2", "Letra del ejercicio 2", "imgs/Ejercicio3.jpg")
arrEjercicios.push(ejercicio2);
let ejercicio3 = new Ejercicio("Intermedio", "Ejercicio intermedio 1", "Letra del ejercicio 1", "imgs/Ejercicio2.jpg")
arrEjercicios.push(ejercicio3);
let ejercicio4 = new Ejercicio("Intermedio", "Ejercicio intermedio 2", "Letra del ejercicio 2", "imgs/Ejercicio1.jpg")
arrEjercicios.push(ejercicio4);
let ejercicio5 = new Ejercicio("Avanzado", "Ejercicio avanzado 1", "Letra del ejercicio 1", "imgs/Ejercicio3.jpg")
arrEjercicios.push(ejercicio5);
let ejercicio6 = new Ejercicio("Avanzado", "Ejercicio avanzado 2", "Letra del ejercicio 2", "imgs/Ejercicio2.jpg")
arrEjercicios.push(ejercicio6);
console.log("Ejercicios precargados");
console.log(arrEjercicios);

document.querySelector("#btnAgregarEjercicio").addEventListener("click", agregarEjercicio)

function agregarEjercicio() {
  let NivelEjercicio = document.querySelector("#slcNivelEjercicio").value;
  let tituloEjercicio = document.querySelector("#txtEjerciciosTitulos").value;
  let ejerciciosLetra = document.querySelector("#txtEjerciciosLetra").value;
  let numeroCaracteres = tituloEjercicio.length+ejerciciosLetra.length;
  let foto = document.querySelector("#slcFotos").value;
  console.log(numeroCaracteres);

  if (numeroCaracteres < 200 && numeroCaracteres > 20 ) {
    let ejercicio = new Ejercicio (NivelEjercicio, tituloEjercicio, ejerciciosLetra, foto);
    arrEjercicios.push(ejercicio)
    console.log(arrEjercicios)
  
    mostrarEjercicios();
  }
  else {
    alert("No se ha podido agregar, asegurate de que sea menor a 200 y mayor a 20 caracteres")
  
  }
}

function mostrarEjercicios() {
 
  let tabla = document.querySelector("#tablaEjercicios");
  let trnuevo = document.createElement("tr");
  let tdtitulo = document.createElement("td");
  let tdletra = document.createElement("tl");
  let tdimagen = document.createElement("ti");

  trnuevo.appendChild(tdtitulo);
  trnuevo.appendChild(tdletra);
  trnuevo.appendChild(tdimagen);

  document.querySelector("#tablaEjercicios").innerHTML = "";
  document.querySelector("#tablaEjercicios").innerHTML +=`

      <tr>
      <th>Nivel</th>
      <th>Titulo</th>
      <th>Letra</th> 
      <th>Imagen</th>
    </tr>

  `;
  for (let i = 0; i < arrEjercicios.length; i++) {
    console.log("Debug loop tabla");
    const elemento = arrEjercicios[i];
    document.querySelector("#tablaEjercicios").innerHTML += `<tr>
    <td>${elemento.Nivel}</td>
    <td>${elemento.titulo}</td>
    <td>${elemento.letra}</td>
    <td><img width="150px" height="150px" src="${elemento.imagen}" /></td>
  </tr>`;
}

}
function mostrarEjerciciosAlumnos() {
 
  let tabla = document.querySelector("#tablaEjerciciosAlumno");
  let trnuevo = document.createElement("tr");
  let tdtitulo = document.createElement("td");
  let tdletra = document.createElement("tl");
  let tdimagen = document.createElement("ti");

  let alumno = darAlumno(usuarioLogeado);
  // Igualamos la variable alumno al objeto del alumno que se haya logeado
  // usando la funcion darAlumno() con el parametro usuarioLogeado
  //usuarioLogeado es una variable global que se guarda siempre que un usuario hace login
  // para que siempre usandola podamos saber quien es el usuario que está logeado
 
  

  trnuevo.appendChild(tdtitulo);
  trnuevo.appendChild(tdletra);
  trnuevo.appendChild(tdimagen);

  document.querySelector("#tablaEjerciciosAlumno").innerHTML = "";
  document.querySelector("#tablaEjerciciosAlumno").innerHTML +=`

      <tr>
      <th>Nivel</th>
      <th>Titulo</th>
      <th>Letra</th> 
      <th>Imagen</th>
    </tr>

  `;

  // hacemos un loop que recorra TODOS los ejercicios
  for (let i = 0; i < arrEjercicios.length; i++) {
    const elemento = arrEjercicios[i];
   

    //Nos fijamos si el nivel del objeto del alumno que está logeado es igual al nivel del ejercicio   
    if (alumno.nivel == elemento.Nivel && elemento.Nivel == alumno.nivel) {

    //Si el nivel del alumno es el mismo que el del ejercicio entonces mostraselos
    document.querySelector("#tablaEjerciciosAlumno").innerHTML += `<tr>
    <td>${elemento.Nivel}</td>
    <td>${elemento.titulo}</td>
    <td>${elemento.letra}</td>
    <td><img width="50px" height="50px" src="${elemento.imagen}" /></td>
  </tr>`;
}
}
}


  
  function armarComboDocentes() {
    document.querySelector("#selectDos").innerHTML = `<option value="-1">Seleccione...</option>`;
    for (let i = 0; i < Registrados.length; i++) {
      const Docente = Registrados[i];
      if(Docente.tipo == "Docente"){
      document.querySelector("#selectDos").innerHTML += `<option >${Docente.nombre}(${Docente.nombreUsuario})</option>`;
      }
    }


  }

document.getElementById("slcAudio").addEventListener("change", function () {

  let audio = document.getElementById("audioControl");
  let audioS = document.getElementById("audioS");
  let seleccionado = document.getElementById("slcAudio").value; 
  audioS.src = seleccionado;
  audio.load();
});

let arrTareas = [];

class Tarea { 

  constructor(ejercicio1, alumno1, audio1, solucion1, profesor1, devolucion1, resuelto1)
  { 
      this.ejercicio = ejercicio1;
      this.alumno = alumno1;
      this.audio = audio1;
      this.solucion = solucion1;
      this.profesor = profesor1;
      this.devolucion = devolucion1;
      this.resuelto = resuelto1;
  }
}

document.querySelector("#btnTareas").addEventListener("click", entregarTarea);

  function entregarTarea() {
    
    let solucion = document.getElementById("txtSolucion").value; 
    let audio = document.getElementById("slcAudio").value; 
    
    let tarea = new Tarea()

}

function darAlumno(usuario){

  //Hacemos loop por todos los alumnos que hay registrados  
  for (let i = 0; i < Registrados.length; i++) {    
    const elemento = Registrados[i];
    //Si el nombre del usuario que está logeado es igual al nombre de usuario del objeto
    //entonces devolvemos el objeto, para poder usarlo en la otra función   
    if (elemento["nombreUsuario"].toLowerCase() === usuario.toLowerCase()) {
        return elemento
    }
  }
}
