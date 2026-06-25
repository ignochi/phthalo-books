const BASE_URL = "http://localhost:3001";

export async function getBooks() {
  const response = await fetch(`${BASE_URL}/books`);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
}

export async function addBook(book) {
  const response = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });

  return response.json();
}