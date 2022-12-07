var semana = ["Domingo",
 "Segunda-Feira", "Terça-Feira",
  "Quarta-Feira", "Quinta-Feira",
   "Sexta-Feira", "Sábado"];

var d = new Date("12/25/2022");

console.log(semana[d.getDay()]);