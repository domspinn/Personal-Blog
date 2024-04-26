document.addEventListener('DOMContentLoaded', function() {
    
    const journalForm = document.getElementById('journalForm');
    if (journalForm) {

        journalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const entry = { title, description };
            const entries = JSON.parse(localStorage.getItem('entries')) || [];

            entries.push(entry);

            localStorage.setItem('entries', JSON.stringify(entries));

            window.location.href = 'entries.html';
        });
    }


    const entriesContainer = document.getElementById('entriesContainer');
    if (entriesContainer) {
        const entries = JSON.parse(localStorage.getItem('entries')) || [];

        entries.forEach(function(entry) {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');
            entryDiv.innerHTML = `
                <h3>${entry.title}</h3>
                <p>${entry.description}</p>
            `;
            entriesContainer.appendChild(entryDiv);
        });
    }
});


const modeButton = document.getElementById('mode');
const body = document.body;

modeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}