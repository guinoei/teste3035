function getVogal( remove ){
    return remove.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');
 }
 
 var resultado = getVogal( "sapato" );
 
 console.log( resultado );