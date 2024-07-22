let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    //verificar se algo foi digitado antes de adicionar
        if(amigo.value == '') {
            alert('Digite um nome para adicionar');
            return;
        }

    //verificar se o nome se repete
        if(amigos.includes(amigo.value)){
            alert('Nome já adicionado');
            return;
        }


    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    //numero minimo de participantes
    if(amigos.length <= 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i=0;i<amigos.length;i++){

        if(i == amigos.length-1) { // array comeca na posicao 0
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        } 
        //<br> dá um break
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [0];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}