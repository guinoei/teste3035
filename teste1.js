function getnumber() {
    let numbers = [1, 9, 3, 5, 4, 8];
    let orders = numbers.sort();
  
    return orders[orders.length-2];
}

console.log(getnumber())