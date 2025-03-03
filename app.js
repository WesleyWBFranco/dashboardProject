document.addEventListener("DOMContentLoaded", function() {
    fetchBibleVerse();
    const checkboxes = document.querySelectorAll(".habit-checkbox");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                this.parentElement.style.textDecoration = "line-through";
                this.parentElement.style.color = "gray";
            } else {
                this.parentElement.style.textDecoration = "none";
                this.parentElement.style.color = "black";
            }
        });
    });
});

function fetchBibleVerse() {
    // Escolher um livro e capítulo aleatório
    const books = ["salmos", "proverbios", "mateus", "joao", "romanos", "efesios"];
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const randomChapter = Math.floor(Math.random() * 5) + 1; // Escolhe de 1 a 5
    const apiUrl = `https://bible-api.com/${randomBook} ${randomChapter}:1?translation=almeida`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("bible-verse").innerText = `"${data.text}"`;
            document.getElementById("verse-reference").innerText = `📖 ${data.reference}`;
        })
        .catch(error => {
            document.getElementById("bible-verse").innerText = "Erro ao carregar versículo.";
            console.error("Erro ao buscar versículo:", error);
        });
}