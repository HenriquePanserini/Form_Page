let nome = document.getElementById('inp1');
let rg = document.getElementById('inp2');
let cpf = document.getElementById('inp3');
let estCiv = document.getElementById('inp4');

function rule(){
    if(nome.textContent.length == 0){
        alert("Insira valor de nome valido");
    }
    if(rg.textContent.length == 0){
        alert("Insira valor de RG valido"); 
    }
    if(cpf.textContent.length == 0){
        alert("Insira valor de CPF valido")
    }
}