document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const form = document.querySelector('form');
    const createAccountButton = document.querySelector('button[type="submit"]');

    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Le password non corrispondono.");
            confirmPasswordInput.classList.add('error');
        } else {
            confirmPasswordInput.setCustomValidity(''); // Resetta il messaggio di errore
            confirmPasswordInput.classList.remove('error');
        }
        // Attiva la validazione del browser per mostrare il messaggio di errore
        confirmPasswordInput.reportValidity();
    }

    // Aggiunge un event listener per validare le password in tempo reale
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    // Aggiungi un event listener per la sottomissione del modulo (per esempio, prevenire l'invio se le password non corrispondono)
    form.addEventListener('submit', (event) => {
        validatePassword(); // Ri-valida al momento dell'invio
        if (!form.checkValidity()) {
            event.preventDefault(); // Impedisce l'invio del modulo se ci sono errori di validazione HTML5
            // Qui potresti aggiungere della logica per mostrare un messaggio generale di errore
        } else {
            console.log("Modulo inviato con successo (simulato)!");
            // event.preventDefault(); // Per non ricaricare la pagina in questo esempio
        }
    });
});