alert("bem-vindo!"); 
let nota1= Number(prompt("Indique a nota do 1º bimestre:"));
let nota2= Number(prompt("Indique a nota do 2º bimestre:"));
let nota3= Number(prompt("Indique a nota do 3º bimestre:"));
let nota4= Number(prompt("Indique a nota do 4º bimestre:"));
let total = (nota1+ nota2 + nota3 + nota4)/4;
const media=7
if(total>=media){
   alert(`Aprovado com ${total}`);
}else{

   let Ne= Number(prompt("Insira o valor da nota do Exame"));
   if(Ne>=media){
     alert(`Aluno Aprovado `);
   }else{
     alert(`Aluno Reprovado`);
    }
}