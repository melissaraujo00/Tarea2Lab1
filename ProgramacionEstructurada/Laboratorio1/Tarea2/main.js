const cuboCifra = (num) =>{
    cifra = Array.from(num); //convertir a array
    cuboDigitos = cifra.map((cifra) => cifra ** 3); //cada elemento se pueda elevar al cubo
    return cuboDigitos
}

const numero = prompt("Ingrese un numero: ") 
if (isNaN(numero)) {
    alert("El valor ingresado es invalido");
}else{
    alert("El cubo de cada cifra de " + numero + " = " + cuboCifra(numero).join(" , "));
}

