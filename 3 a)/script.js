alert("bem-vindo!"); 
let valor1=parseInt(prompt("informe o valor1"));
let valor2=parseInt(prompt("informe o valor2"));
if((valor1>valor2)){
maior=valor1;
menor=valor2;
}
else{
maior=valor2;
menor=valor1;
}
resultado = maior-menor;
alert(resultado);