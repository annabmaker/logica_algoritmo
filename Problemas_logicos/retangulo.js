
 function tipoTriangulo(a,b,c){
    if (a + b <= c || a + c <= b || b + c <= a ){
        return "Não forma Triangulo";
    }
    if ( a === b && b === c ){
        return "Equilatereo";
    }
    if ( a === c || a === c || b === c){
        return "Isosceles";
    }
    return "Escaleno";
 }

 console.log(tipoTriangulo(5,5,5));
 console.log(tipoTriangulo(5,7,5));
 console.log(tipoTriangulo(4,5,6));
 console.log(tipoTriangulo(1,2, 10));