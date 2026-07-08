const decks = window.FLASHCARD_DECKS || [];
let currentDeck = null;
let currentIndex = 0;
let wordVisible = true;
const $ = (id) => document.getElementById(id);

function renderLibrary(){
  const lib = $('deckLibrary');
  lib.innerHTML = '';
  decks.forEach(deck => {
    const btn = document.createElement('button');
    btn.className = 'deck-tile';
    btn.innerHTML = `<h3>${deck.name}</h3><span>${deck.category} • ${deck.cards.length} cards</span>`;
    btn.onclick = () => openDeck(deck.id);
    lib.appendChild(btn);
  });
}
function openDeck(id){
  currentDeck = decks.find(d => d.id === id);
  currentIndex = 0; wordVisible = true;
  $('deckLibrary').classList.add('hidden');
  $('studyView').classList.remove('hidden');
  showCard();
}
function showCard(){
  const card = currentDeck.cards[currentIndex];
  $('deckTitle').textContent = currentDeck.name;
  $('cardCounter').textContent = `${currentIndex + 1} of ${currentDeck.cards.length}`;
  $('word').style.visibility = wordVisible ? 'visible' : 'hidden';
  $('toggleWordBtn').textContent = wordVisible ? 'Hide Word' : 'Show Word';
  $('word').textContent = card.title;
  $('subtitle').textContent = card.subtitle || '';
  $('visual').innerHTML = visualFor(card);
}
function visualFor(card){
  if(card.type === 'shape') return shapeSvg(card.shape || card.title.toLowerCase());
  if(card.type === 'color') return `<div class="color-swatch color-${card.color}"></div>`;
  if(card.type === 'number') return `<div>${card.title}</div><div class="dots">${Array.from({length: Math.min(card.count,20)},()=>'<span class="dot"></span>').join('')}</div>`;
  if(card.emoji) return `<div>${card.emoji}</div>`;
  return `<div>${card.title}</div>`;
}
function shapeSvg(shape){
  const common = 'fill="none" stroke="#172033" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"';
  const map = {
    circle:`<circle cx="200" cy="200" r="140" ${common}/>` , oval:`<ellipse cx="200" cy="200" rx="155" ry="105" ${common}/>` , square:`<rect x="70" y="70" width="260" height="260" ${common}/>` , rectangle:`<rect x="45" y="105" width="310" height="190" ${common}/>` , triangle:`<polygon points="200,45 360,340 40,340" ${common}/>` , diamond:`<polygon points="200,35 365,200 200,365 35,200" ${common}/>` , pentagon:`<polygon points="200,35 355,150 295,345 105,345 45,150" ${common}/>` , hexagon:`<polygon points="115,55 285,55 370,200 285,345 115,345 30,200" ${common}/>` , octagon:`<polygon points="140,45 260,45 355,140 355,260 260,355 140,355 45,260 45,140" ${common}/>` , star:`<polygon points="200,35 245,150 370,150 270,225 310,350 200,275 90,350 130,225 30,150 155,150" ${common}/>` , heart:`<path d="M200 345 C70 245 35 165 80 100 C120 45 185 70 200 120 C215 70 280 45 320 100 C365 165 330 245 200 345 Z" ${common}/>` , crescent:`<path d="M270 55 C170 75 95 160 95 250 C95 320 150 365 230 370 C150 330 130 250 160 175 C185 115 225 75 270 55 Z" ${common}/>` , arrow:`<path d="M45 200 H285 M220 120 L340 200 L220 280" ${common}/>` , cross:`<path d="M160 55 H240 V160 H345 V240 H240 V345 H160 V240 H55 V160 H160 Z" ${common}/>`
  };
  return `<svg class="shape-svg" viewBox="0 0 400 400" role="img" aria-label="${shape}">${map[shape] || map.circle}</svg>`;
}
function next(){ currentIndex = (currentIndex + 1) % currentDeck.cards.length; showCard(); }
function prev(){ currentIndex = (currentIndex - 1 + currentDeck.cards.length) % currentDeck.cards.length; showCard(); }
function shuffle(){ currentDeck.cards.sort(() => Math.random() - .5); currentIndex = 0; showCard(); }
function speak(){ const u = new SpeechSynthesisUtterance(currentDeck.cards[currentIndex].title); u.rate=.8; speechSynthesis.cancel(); speechSynthesis.speak(u); }
$('backBtn').onclick = () => { $('studyView').classList.add('hidden'); $('deckLibrary').classList.remove('hidden'); };
$('libraryBtn').onclick = () => { $('studyView').classList.add('hidden'); $('deckLibrary').classList.remove('hidden'); };
$('nextBtn').onclick = next; $('prevBtn').onclick = prev; $('shuffleBtn').onclick = shuffle; $('speakBtn').onclick = speak;
$('toggleWordBtn').onclick = () => { wordVisible = !wordVisible; showCard(); };
document.addEventListener('keydown', (e)=>{ if(!currentDeck) return; if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); if(e.key===' ') { e.preventDefault(); speak(); }});
renderLibrary();
