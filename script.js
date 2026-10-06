// Acordeão acessível, sem dependências externas.
const buttons = document.querySelectorAll('.faq-question');
buttons.forEach((button) => {
  const answer = button.nextElementSibling;
  answer.id = `${button.id}-resposta`;
  button.setAttribute('aria-controls', answer.id);
  button.setAttribute('aria-expanded', 'false');
  answer.hidden = true;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    buttons.forEach((other) => {
      other.setAttribute('aria-expanded', 'false');
      other.nextElementSibling.hidden = true;
    });
    button.setAttribute('aria-expanded', String(open));
    answer.hidden = !open;
  });
});
