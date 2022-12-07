function calc(n1, n2, op){
 
    switch (op) {
  case 'plus':
    return n1+n2;
  
  case 'sub':
    return n1-n2;
  
  case 'mult':
    return n1*n2;
     
  case 'div':
    return n1/n2;
      
  default:    
    console.log("nao foi possivel realizar o calculo");
}}

console.log(calc(4, 245, "plus"))