function messageUser() {
    console.log("Hello, World! This is aula-02.js");

}

//setTimeout(messageUser, 2000);// ms 


let contador = 0;
let id =setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if(contador == 5){
        clearInterval(id);
        messageUser();
    }
}, 1000); // ms