

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        data.forEach(item => {
            document.getElementById(`title-${item.id}`).innerHTML = item.title;
            document.getElementById(`genre-${item.id}`).innerHTML = item.genre;
            document.getElementById(`year-${item.id}`).innerHTML = item.year;
            document.getElementById(`score-${item.id}`).innerHTML = item.rating;
            document.getElementById(`votes-${item.id}`).innerHTML = item.votes;
            document.getElementById(`desc-${item.id}`).innerHTML = item.description;
            document.getElementById(`bar-${item.id}`).style.width = `${(item.rating / 10) * 100}%`
        })
    } catch(error) {
        console.log('Error:', error);
    }
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
})

fetchData();