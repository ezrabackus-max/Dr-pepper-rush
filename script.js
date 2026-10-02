const form = document.querySelector('#composer');
const prompt = document.querySelector('#prompt');
const messages = document.querySelector('#messages');
const themeToggle = document.querySelector('#theme-toggle');
const newChat = document.querySelector('#new-chat');

const replies = [
  'That is a smart constraint. I’d make the first milestone something the team can complete by Friday, then use the result to decide what deserves a second pass.',
  'I see a useful thread here: clarity before volume. We can turn this into a compact experiment with one audience, one promise, and one clear success signal.',
  'Let’s keep that human. A simple next step is to write the message as an invitation, then pair it with one concrete example of the feeling we want people to have.'
];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = prompt.value.trim();
  if (!text) return;
  const user = document.querySelector('#user-template').content.cloneNode(true);
  user.querySelector('.bubble').textContent = text;
  messages.append(user);
  prompt.value = '';
  prompt.style.height = '25px';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  window.setTimeout(() => {
    const ai = document.querySelector('#ai-template').content.cloneNode(true);
    ai.querySelector('.message-content p').textContent = replies[Math.floor(Math.random() * replies.length)];
    messages.append(ai);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 500);
});

prompt.addEventListener('input', () => { prompt.style.height = '25px'; prompt.style.height = `${Math.min(prompt.scrollHeight, 105)}px`; });
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));
newChat.addEventListener('click', () => { prompt.focus(); prompt.placeholder = 'Start a new conversation…'; });
