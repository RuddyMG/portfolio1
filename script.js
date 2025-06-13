document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = form.querySelector('#message').value.trim();
        if (message.length === 0) {
            alert('Veuillez écrire un message avant d\'envoyer.');
            return;
        }

        let success = document.createElement('div');
        success.textContent = 'Merci pour votre message !';
        success.style.background = '#4caf50';
        success.style.color = '#fff';
        success.style.padding = '1rem';
        success.style.marginTop = '1rem';
        success.style.borderRadius = '8px';
        success.style.textAlign = 'center';
        form.parentNode.insertBefore(success, form.nextSibling);

        form.reset();
        form.querySelector('button[type="submit"]').disabled = true;
        setTimeout(() => {
            success.remove();
            form.querySelector('button[type="submit"]').disabled = false;
        }, 3000);
    });
});