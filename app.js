const state = { deck: null, cards: [], index: 0, revealed: false };
const $ = (id) => document.getElementById(id);

function imageUrl(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`;
}
function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
function renderDecks() {
  const query = $('searchInput').value.toLowerCase().trim();
  const grid = $('deckGrid');
  grid.innerHTML = '';
  DECKS.filter(deck => {
    const haystack = `${deck.title} ${deck.cards.map(c => c.name).join(' ')}`.toLowerCase();
    return !query || haystack.includes(query);
  }).forEach(deck => {
    const card = document.createElement('button');
    card.className = 'deck-card';
    card.innerHTML = `<div class="deck-icon">${deck.icon}</div><h2>${deck.title}</h2><p>${deck.cards.length} cards</p>`;
    card.addEventListener('click', () => openDeck(deck));
    grid.appendChild(card);
  });
}
function openDeck(deck) {
  state.deck = deck;
  state.cards = $('shuffleDeck').checked ? shuffle(deck.cards) : [...deck.cards];
  state.index = 0;
  state.revealed = false;
  $('deckScreen').classList.remove('active');
  $('cardScreen').classList.add('active');
  $('homeBtn').classList.remove('hidden');
  $('deckTitle').textContent = deck.title;
  renderCard();
}
function renderCard() {
  const card = state.cards[state.index];
  const isTextOnly = card.type === 'text' || !card.file;

  $('cardImage').classList.toggle('hidden', isTextOnly);
  $('textCard').classList.toggle('hidden', !isTextOnly);

  if (isTextOnly) {
    $('cardImage').removeAttribute('src');
    $('cardImage').alt = '';
    $('textCard').textContent = card.display || card.name;
  } else {
    $('cardImage').src = imageUrl(card.file);
    $('cardImage').alt = card.name;
    $('textCard').textContent = '';
  }

  $('cardWord').textContent = card.name;
  $('answer').textContent = state.revealed ? `Answer: ${card.name}` : '';
  $('answer').classList.toggle('hidden', !state.revealed);
  $('prompt').classList.toggle('hidden', state.revealed);
  $('revealBtn').textContent = state.revealed ? 'Hide Answer' : 'Show Answer';
  $('cardCounter').textContent = `${state.index + 1} of ${state.cards.length}`;
  $('prevBtn').disabled = state.index === 0;
  $('nextBtn').disabled = state.index === state.cards.length - 1;
}
function revealToggle() { state.revealed = !state.revealed; renderCard(); }
function nextCard() { if (state.index < state.cards.length - 1) { state.index++; state.revealed = false; renderCard(); } }
function prevCard() { if (state.index > 0) { state.index--; state.revealed = false; renderCard(); } }
function speakAnswer() {
  const card = state.cards[state.index];
  if (!card || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(card.name));
}
function goHome() {
  $('cardScreen').classList.remove('active');
  $('deckScreen').classList.add('active');
  $('homeBtn').classList.add('hidden');
}
$('searchInput').addEventListener('input', renderDecks);
$('homeBtn').addEventListener('click', goHome);
$('revealBtn').addEventListener('click', revealToggle);
$('nextBtn').addEventListener('click', nextCard);
$('prevBtn').addEventListener('click', prevCard);
$('speakBtn').addEventListener('click', speakAnswer);
$('flashCard').addEventListener('click', revealToggle);
document.addEventListener('keydown', (e) => {
  if (!$('cardScreen').classList.contains('active')) return;
  if (e.key === ' ') { e.preventDefault(); revealToggle(); }
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === 'Escape') goHome();
});
renderDecks();
