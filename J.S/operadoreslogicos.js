function MayorYmenor(num){
    if (num > 5 && num < 10)console.log(true);
    else console.log(false);
}

MayorYmenor(2);
MayorYmenor(7);

function MayorYmenorYPar(num){
    if (num > 5 && num < 10 && num % 2 ===0)console.log(true);
    else console.log(false);
}

MayorYmenorYPar(7);
MayorYmenorYPar(8);
//En esta funcion compleja pusimos mas de una condicion con && que es "y" en string.
//Al agregar condiciones se tienen que cumplir todas.Como arriba por ejemplo
//que se cumplieron todas. 5 es mayor a (num), menor a 10 y par, ya que se divide x 2.

function operadorOr(str){
    if(str === "henry" || str.length<2)console.log(true);
    else console.log(false);
}
operadorOr("henry");
operadorOr("j.s");
operadorOr("h");
//esta funcion tiene 2 condiciones con || que es or, acá solo se necesita que una condición
//se cumpla para que sea válida, en el primero str es === henry
//en el segundo es mayor a 2, ya que tiene mas de 1 letra y en el tercero es
//true porq tiene una sola letra, asi que es menor a 2.

function negacion(permiso){
    if(permiso) console.log("tiene permiso");
}
negacion(true);
//solo se muestra si la condicion es verdadera

function negacion(permiso){
    if(!permiso) console.log("tiene permiso");
}
negacion(false);
//solo se muestra si la condicion es falsa

function negacion(permiso){
    if(permiso === true)console.log("tiene permiso");
}
negacion(true);
//aca se muestra porque le preguntamos si permiso es igual a true, de ser asi
//se mostrara el string "tiene permiso".

function negacion(permiso){
    if(permiso !== true)console.log("tiene permiso");
}
negacion(false);
//aca al ser diferente, al poner false, nos aparece "tiene permiso".

function condicioncompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3)console.log(true);
    else console.log(false);
}
condicioncompleja(10);
condicioncompleja(6);
condicioncompleja(3);
condicioncompleja(5);
//el operador or precede al operador at, por eso solo necesita una condicion
//para que se cumpla, las demás necesitan tener 2 condiciones para que sea verdadera.
//&& === and, || === or, ! === not.
//la negacion transformará nuestro valor en opuesto
//el operador and nos permite juntar condiciones para que todas se cumplan en simultaneo
//el operador or solo aceptará que se cumpla una condición propuesta.