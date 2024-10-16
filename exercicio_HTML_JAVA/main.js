document.getElementById('form-calcular').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensage');

    if (campoB > campoA) {
        mensagem.innerHTML = "Válido! Campo B é maior que Campo A.";
        mensagem.style.color = "#28a745"; 
        
    } else {
        mensagem.innerHTML  = "Inválido! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "red"; 
    }
});