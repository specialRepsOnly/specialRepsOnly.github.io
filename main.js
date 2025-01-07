// Select elements for first card
const openCardBtn1 = document.getElementById('openCardBtn1');
const closeCardBtn1 = document.getElementById('closeCardBtn1');
const card1 = document.getElementById('card1');

// Event listener to open first card
openCardBtn1.addEventListener('click', () => {
    card1.style.display = 'block'; // Show the card
    openCardBtn1.style.display = 'none'; // Hide the Open Card button
});

// Event listener to close first card
closeCardBtn1.addEventListener('click', () => {
    card1.style.display = 'none'; // Hide the card
    openCardBtn1.style.display = 'inline-block'; // Show the Open Card button again
});

// Select elements for second card
const openCardBtn2 = document.getElementById('openCardBtn2');
const closeCardBtn2 = document.getElementById('closeCardBtn2');
const card2 = document.getElementById('card2');

// Event listener to open second card
openCardBtn2.addEventListener('click', () => {
    card2.style.display = 'block'; // Show the card
    openCardBtn2.style.display = 'none'; // Hide the Open Card button
});

// Event listener to close second card
closeCardBtn2.addEventListener('click', () => {
    card2.style.display = 'none'; // Hide the card
    openCardBtn2.style.display = 'inline-block'; // Show the Open Card button again
});
