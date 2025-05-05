document.addEventListener('DOMContentLoaded', function() {

    function updateCountdown() {
        const now = new Date();
        
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(15, 0, 0, 0);
        

        const diff = tomorrow - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        

        document.getElementById("countdown-display").innerHTML = 
            `Faltam <strong>${days}</strong> dias, <strong>${hours}</strong> horas, <strong>${minutes}</strong> minutos e <strong>${seconds}</strong> segundos para amanhã às 15h!`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("exampleInputEmail1").value;
        const idade = document.getElementById("exampleInpunumero1").value;
        const serie = document.getElementById("serie").value;
        const esporte = document.getElementById("esporte").value;
        const aceitarTermo = document.getElementById("aceitar-termo").checked;
        
  
        let isValid = true;

        if(!nome) {
            alert("Por favor, preencha o nome.");
            isValid = false;
        } else {

            const firstLetter = nome.trim().charAt(0).toUpperCase();
            if(firstLetter !== 'M' && firstLetter !== 'C') {
                alert("Apenas participantes com nomes começando com M ou C podem participar do campeonato!");
                isValid = false;
            }
        }

        if(!idade) {
            alert("Por favor, preencha a idade.");
            isValid = false;
        } else if(parseInt(idade) < 12) {
            alert("Você precisa ter pelo menos 12 anos para participar do campeonato!");
            isValid = false;
        }
        
        if(!serie || serie === "nada") {
            alert("Por favor, selecione a série.");
            isValid = false;
        }
        
        if(!esporte || esporte === "nada") {
            alert("Por favor, selecione um esporte.");
            isValid = false;
        }
        
        if(!aceitarTermo) {
            alert("Você precisa aceitar os termos para continuar.");
            isValid = false;
        }
   
        if(isValid) {
            alert("Inscrição realizada com sucesso! Boa sorte no campeonato!");

        }
    });
});