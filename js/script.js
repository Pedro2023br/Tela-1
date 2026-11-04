const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const toggleButtons = document.querySelectorAll('.toggle-pass');

if (toggleButtons.length) {
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const isPassword = input.type === 'password';

      input.type = isPassword ? 'text' : 'password';
      button.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
      button.innerHTML = isPassword
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 3l18 18"></path><path d="M10.5 10.5A2 2 0 0 0 13.5 13.5"></path><path d="M9 6.35A10.7 10.7 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-4.15 5.15"></path><path d="M6.5 7.7A16.6 16.6 0 0 0 2 12s3.5 6 10 6a11.7 11.7 0 0 0 4.4-1"></path></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    });
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const matricula = document.getElementById('matricula').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const token = document.getElementById('token').value.trim();

    if (!matricula || !senha || !token) {
      errorMessage.textContent = 'Preencha todos os campos antes de continuar.';
      errorMessage.classList.add('visible');
      errorMessage.style.color = '#c8303e';
      errorMessage.style.background = 'rgba(200, 48, 62, 0.06)';
      errorMessage.style.borderColor = 'rgba(200, 48, 62, 0.2)';
      return;
    }

    errorMessage.textContent = 'Login simulado realizado com sucesso.';
    errorMessage.classList.add('visible');
    errorMessage.style.color = '#1a8b63';
    errorMessage.style.background = 'rgba(26, 139, 99, 0.08)';
    errorMessage.style.borderColor = 'rgba(26, 139, 99, 0.2)';
  });
}
