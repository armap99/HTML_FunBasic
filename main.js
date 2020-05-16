/*alert('Hola policia');*/ //alertas 
//variables 
var nombre = "Armando Prado";
var altura = 180;

var contatanacion = nombre + " " + altura
//escribir en la pagina 
//document.write(nombre);

var ContenedorLogin = document.getElementById("container");//obtener o hacer referencia a un elemento html
//ContenedorLogin.innerHTML = contatanacion; //escribir en la parte especifica del html

/*ContenedorLogin.innerHTML +=  `
    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre} </h2>
`;*/ //con el += no se borra lo que ya cremamos 

/*if(){

}*/

//for(i = 0; i < 10; i++)

function MuestraTexto(){
    ContenedorLogin.innerHTML +=  `
    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre} </h2>
    `;     
}

//var array = [carol,yo,el];

/*array.array.forEach(function(nombre) {
    document.write(nombre+'<br/>');
});*/