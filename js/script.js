const seatsSelect = document.getElementById('seats');
const nameInputs = document.getElementById('name-inputs');
const name1Input = document.getElementById('name1');


seatsSelect.addEventListener('change', () => {
    const selectedSeats = seatsSelect.value;
    name1Input.disabled = selectedSeats !== '2';
    nameInputs.style.display = selectedSeats === '2' ? 'flex' : 'none';
});