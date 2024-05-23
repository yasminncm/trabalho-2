alert("bem-vindo!"); 
let valorA=Number(prompt("informe valorA"));
let valorB=Number(prompt("informe valorB"));
let valorC=Number(prompt("informe valorC"));
let menor,maior,meio;

if((valorA<valorB)&&(valorA<valorC)){
    menor=valorA

 if((valorB<valorC)){
    meio=valorB
    maior=valorC
  }else{
    meio=valorC
    maior=valorB
  }
}
if((valorB<valorA)&&(valorB<valorC)){
        menor=valorB
   if((valorA)<(valorC)){
      meio=valorA
      maior=valorC
  }else{
     meio=valorC
     maiorvalorA
       }
}
    if((valorC>valorA)&&(valorC<valorB)){
         menor=valorC
   if((valorA)<(valorB)){
       meio=valorA
       maior=valorB
   }else{
       meio=valorB
       maior=valorA
     
     }
}
alert(`${menor},${meio},${maior}`);