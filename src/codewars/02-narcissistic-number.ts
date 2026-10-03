
//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
export function narcissistic(value: number): boolean {
  
let arrayDigitos = Array.from(String(value), Number);
let potencia = arrayDigitos.length;
let suma = 0;

for(let i=0 ; i<arrayDigitos.length; i++){
const numero = arrayDigitos[i];

suma += numero** potencia;
console.log(suma);

if( suma === value )
    return true;
} 
    return false;

}




console.log(narcissistic(153));