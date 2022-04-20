
// stampa una frase di n parole ogni parola è composta massimo 10 lettere 


const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//numero da 1 a 10
// function RandomWordNumber(){
//     return Math.ceil(Math.random() * 10);
// }
// console.log(RandomWordNumber());



//con numero da 1 a dieci creare una parola
function WordGenerator(){
    let parola = "";
    let totAbc = Math.ceil(Math.random() * 10);
    for(i = 1; i <= totAbc; i++){
        x = Math.ceil(Math.random()*abc.length -1 );
        // console.log(x, "x")
    //    console.log(abc[x]);
       parola+= abc[x];
    }
    return parola
}
console.log(WordGenerator())

//mi serve un geratore di frasi che genera tot parole
function generatoreFrasi(numeroDiParole){
    
    let frase = "";
    for(let i = 0; i < numeroDiParole; i++){
        let fraseups = WordGenerator()+ " ";
        console.log(i, "frase ",fraseups);

        frase += fraseups
    }
    return frase
}

console.log(generatoreFrasi(10))



// function TotWordsGenerator(index){
//     const askwordnumber = index
//     for(i=0; i < askwordnumber; i++ ){
//         totWords = totWords + WordGenerator() + " " ;
//     }
//     console.log(totWords, "aaa2")
//     return totWords
// }

// console.log(TotWordsGenerator(4))
