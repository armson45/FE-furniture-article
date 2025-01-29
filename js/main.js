const d = document;
let bpWidth = window.innerWidth;

d.addEventListener('click', e => {
  if (e.target.matches('.share-btn') && bpWidth < 1200) {
    d.querySelector('.social-media').classList.toggle('hidden');
    d.querySelector('.author-info').classList.toggle('hidden');
  }
  if (e.target.matches('.share-btn') && bpWidth > 1200) {
    d.querySelector('.triangle').classList.toggle('hidden');
    d.querySelector('.social-media').classList.toggle('hidden');
  }
});