const cuboCifra = (num) =>{
    cubo =[];
    cifra = Array.from(num); //convertir a array
    cuboDigitos = cifra.map(cifra => Math.pow(cifra, 3));
    cubo = Array.from(cuboDigitos)
    return cubo
}

const numero = prompt("Ingrese un numero: ") 
    if (isNaN(numero)) {
        alert("El valor ingresado es invalido");
    
    }else{
        const total = cuboCifra(numero);
        alert(`El cubo de cada cifra de ${numero} es:  ${total.join(" , ")} `)
        console.log("El cubo de cada cifra de ",numero, "es",total); //aqui se muestra que si esta en un array :D
        
    }

