// Select elements
const openCardBtn = document.getElementById('openCardBtn');
const closeCardBtn = document.getElementById('closeCardBtn');
const card = document.getElementById('card');

// Event listener to open the card
openCardBtn.addEventListener('click', () => {
    card.style.display = 'block'; // Show the card
    openCardBtn.style.display = 'none'; // Hide the Open Card button
});

// Event listener to close the card
closeCardBtn.addEventListener('click', () => {
    card.style.display = 'none'; // Hide the card
    openCardBtn.style.display = 'inline-block'; // Show the Open Card button again
});
