document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  fetch('https://danilozavarize32.app.n8n.cloud/webhook-test/3b60817e-3b07-4cfe-84b0-c65f5f4a1443', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        alert('Obrigado por se cadastrar! Entraremos em contato em breve.');
        window.location.href = 'thank-you.html'; // Redirect to thank-you page
      } else {
        alert('Algo deu errado. Tente novamente.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Ocorreu um erro. Tente novamente.');
    });
});