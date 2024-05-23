alert("bem-vindo!"); 
let nota1= Number(prompt("Indique a nota do 1º bimestre:"));
let nota2= Number(prompt("Indique a nota do 2º bimestre:"));
let nota3= Number(prompt("Indique a nota do 3º bimestre:"));
let nota4= Number(prompt("Indique a nota do 4º bimestre:"));
let total = (nota1+ nota2 + nota3 + nota4)/4;
const media=5

if(total>=media){
alert(`Aluno Aprovado ${total}`);
}else{
alert(`Aluno Reprovado ${total}`)
}

  
