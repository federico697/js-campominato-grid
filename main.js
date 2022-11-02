const griglia = document.getElementById('griglia');
console.log( griglia )

// creiamo una funzione per creare un div nella griglia
function creazioneQuadrato(num){
    const div = document.createElement('div');
    div.classList.add('quadrato');
    // inseriamo i numeri da 1 a 100 nei quadrati con il paramentro della funzione
    div.innerHTML = num;
    return div;
}

console.log(creazioneQuadrato());

// inseriamo il quadrato creato all'interno della griglia
// griglia.append( creazioneQuadrato() );

// 100 quadrati

for( let i = 1; i <= 100; i++){
    
    let elementoCorrente = creazioneQuadrato(i);
    console.log(elementoCorrente);
    
    elementoCorrente.addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('active');
    });

    griglia.append( elementoCorrente );

}