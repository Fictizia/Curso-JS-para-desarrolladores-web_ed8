//********************************************Paso1
//Crear un objeto para la expendedora
//Crear arrays de clientes
//*************************PAso2

var cliente1 = {  nombre: 'Paco',  nombre_usuario:'Pacorro',  password: 'pacopaco',  profile: 'user',  money: 9999,};
var cliente2 = {  nombre: 'Chema', nombre_usuario:'Ch3m4',  password: 'chemachema',  profile: 'superuser',  money: 9696,};
var cliente3 = {  nombre: 'Antonio',  nombre_usuario:'Anton',  password: 'antonete',  profile: 'user',  money: 8450,};
//Crear arrays de productos
var expendedora = {
  clientes:[cliente1,cliente2,cliente3],
  productos:["Patatas","Chocolate","Refresco","Agua"],
};


//***********************************
//funcion de consultar saldo

function consultaSaldo(){

  var user = prompt("Inserte usuario");
  var contrasena = prompt("Inserte contraseña");
  var saldo = 0;
  var datosCorrectos = false;

  for (var i = 0; i < expendedora.clientes.length; i++){

      if ( user === expendedora.clientes[i].nombre_usuario && contrasena === expendedora.clientes[i].password){

        datosCorrectos = true;
         saldo = expendedora.clientes[i].money;
        }

  }//fin for

  if (!datosCorrectos){
    document.querySelector('#resultado p').innerHTML = "<span class='alert alert-danger'>Datos Incorrectos</span>";
  }else{
    document.querySelector('#resultado p').innerHTML = "Su saldo es de <span class='alert alert-success'>" + saldo + "</span>";
  }

}//fin consultaSaldo
