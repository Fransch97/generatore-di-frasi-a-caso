
// stampa una frase di n parole ogni parola è composta massimo 10 lettere 


const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function RandomWordNumber(){
    return Math.ceil(Math.random() * 10);
}

RandomWordNumber();
let frase = "";
function WordGenerator(totAbc){
    for(i = 1; i <= totAbc; i++){
        x = Math.ceil(Math.random()*abc.length );
        console.log(x, "x")
        frase += abc[x];
        if(i===totAbc){
            frase+= " ";
        }
    }
}

WordGenerator(RandomWordNumber())

console.log(frase)