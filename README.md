# PhthaloBooks

PhthaloBooks is a digital library web application that helps users discover books through searching, filtering, and category-based browsing.

## Features

* Search books by title, author, or category
* Filter books by age range
* Filter books by language
* Recent search history
* Responsive design for desktop and mobile devices
* Category-based book browsing
* Fast client-side filtering
* JSON Server powered backend

---

## Project Structure

```text
phthalo/
│
├── phthalo-books/                 # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── phthalo-books-backend/         # Backend (JSON Server)
│   ├── data/
│   │   └── db.json
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## Technologies Used

### Frontend

* React
* React Router
* Axios
* Vite
* Tailwind CSS

### Backend

* JSON Server

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/ignochi/phthalo-books.git
cd phthalo-books
```

---

## Frontend Setup

```bash
cd phthalo-books

npm install

npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## Backend Setup

Open a second terminal:

```bash
cd phthalo-books-backend

npm install

npm start
```

The JSON Server API will run on:

```text
http://localhost:3001
```

---

## API Endpoint

### Get All Books

```http
GET /books
```

Example:

```http
http://localhost:3001/books
```

---

## Development Workflow

1. Start the backend server.
2. Start the frontend development server.
3. Make changes.
4. Commit changes using Git.
5. Push updates to GitHub.

---

## Future Improvements

* User authentication
* Favorites and reading lists
* Advanced search filters
* Pagination
* Book details pages
* Admin dashboard
* Database integration
* Cloud deployment

---

## License

This project is for educational and portfolio purposes.
