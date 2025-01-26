const d = document;

let html =
  `
    <section class="social-media hidden">
    Share
    <span><img src="./images/icon-facebook.svg" alt=""></span>
    <span><img src="./images/icon-twitter.svg" alt=""></span>
    <span><img src="./images/icon-pinterest.svg" alt=""></span>
    </section>
  `;








d.addEventListener('click', e => {
  console.log(e.target);
  if (e.target.matches('.share-btn')) {
    d.querySelector('.social-media').classList.toggle('hidden');
    d.querySelector('.author-info').classList.toggle('hidden');
  }
});