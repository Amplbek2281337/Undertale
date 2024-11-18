const button = document.querySelector('.time');
const stylesheet = document.querySelector('.theme');
button.addEventListener('click', () => {
    if (stylesheet.getAttribute('href') === 'css/style.css') {
        stylesheet.setAttribute('href', 'css/style_light.css');
    } else {
        stylesheet.setAttribute('href', 'css/style.css');
    }
});

const button1 = document.querySelector('.send');
button1.addEventListener('click', () => {
    alert('Сообщение отправлено')
});

const cards = document.querySelectorAll('.card');
const nextButton = document.querySelector('.strelka1');
const prevButton = document.querySelector('.strelka2');
let currentIndex = 0;
function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active'); // Скрыть все карточки
        if (i === index) {
            card.classList.add('active'); // Показать только текущую карточку
        }
    });
}
function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length; // Перейти к следующей карточке
    showCard(currentIndex);
}
function showPrevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Перейти к предыдущей карточке
    showCard(currentIndex);
}
nextButton.addEventListener('click', showNextCard);
prevButton.addEventListener('click', showPrevCard);
showCard(currentIndex);