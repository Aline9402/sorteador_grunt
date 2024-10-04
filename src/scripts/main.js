document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let numeroMaximo = document.getElementById('numero-maximo').value; 
        numeroMaximo = parseInt(numeroMaximo); // Converter para inteiro

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1; // Gerar número aleatório de 1 até numeroMaximo

        document.getElementById('resultado-valor').innerText = numeroAleatorio; // Vai exibir o resultado
        document.querySelector('.resultado').style.display= "block";
    });
});
