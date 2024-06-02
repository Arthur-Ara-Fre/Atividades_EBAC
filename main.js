const form = document.getElementById('form-ab');
const mensagemSucesso = document.querySelector('.sucesso');
const mensagemErro = document.querySelector('.erro');



form.addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = document.getElementById('campo-a').value;
    let campoB = document.getElementById('campo-b').value;

    let A = parseInt(campoA);
    let B = parseInt(campoB);

    
    if(!isNaN(A) && !isNaN(B)){
        if(A < B)
        {
            mensagemErro.style.display = 'none';
            mensagemSucesso.innerHTML = 'B é maior que A';
            mensagemSucesso.style.display = 'block';
        }
        else{
            mensagemSucesso.style.display = 'none';
            mensagemErro.innerHTML = 'B não é maior que A';
            mensagemErro.style.display = 'block';
        }
        }
    else
    {
        alert('Insira apensa números inteiros');
    }
    
})

