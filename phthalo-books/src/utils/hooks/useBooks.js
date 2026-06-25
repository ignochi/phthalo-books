import axios from 'axios';
import { useState, useEffect } from 'react';

export function useBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const response = await axios.get('http://localhost:3001/books');
            // setBooks(response.data);

            setBooks(
                [...response.data].sort((a, b) =>
                    a.title.localeCompare(b.title, undefined, {
                        sensitivity: "base"
                    })
                )
            );
        }

        loadBooks();
    }, []);

    return books;
}