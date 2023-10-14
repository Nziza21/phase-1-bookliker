document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.querySelector("#list");
    const showPanel = document.querySelector("#show-panel");

    // Function to fetch and display the list of books
    function fetchBooks() {
        fetch("http://localhost:3000/books")
            .then(response => response.json())
            .then(books => {
                books.forEach(book => {
                    displayBook(book);
                });
            });
    }

    // Function to display a single book in the list
    function displayBook(book) {
        const bookItem = document.createElement("li");
        bookItem.innerText = book.title;

        // Add a click event to show book details
        bookItem.addEventListener("click", () => {
            displayBookDetails(book);
        });

        bookList.appendChild(bookItem);
    }

    // Function to display book details when a book is clicked
    function displayBookDetails(book) {
        showPanel.innerHTML = `
            <h2>${book.title}</h2>
            <img src="${book.thumbnail}" alt="Book Thumbnail">
            <p>${book.description}</p>
        `;

        const likeButton = document.createElement("button");
        likeButton.innerText = "LIKE";

        likeButton.addEventListener("click", () => {
            likeBook(book);
        });

        showPanel.appendChild(likeButton);
    }

    // Function to like a book
    function likeBook(book) {
        // Implement the logic for liking a book, including sending a PATCH request.
        // Update the book's users list and the DOM to display the new user.
    }

    // Fetch and display the initial list of books
    fetchBooks();
});
