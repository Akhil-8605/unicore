// useFirebaseBooks.js
import { useEffect, useState } from "react";
import { db } from "../Authentication/firebase"; // Adjust the path if needed
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const useFirebaseBooks = () => {
  const [books, setBooks] = useState([]);

  const booksCollectionRef = collection(db, "books");

  // Function to fetch all books from Firestore
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(booksCollectionRef);
      const booksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to add a new book
  const addBook = async (bookData) => {
    try {
      const docRef = await addDoc(booksCollectionRef, bookData);
      // Optionally, add the new book to state without re-fetching all books:
      setBooks((prev) => [...prev, { ...bookData, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding book: ", error);
    }
  };

  // Function to update an existing book
  const updateBook = async (bookId, updatedData) => {
    try {
      const bookDocRef = doc(db, "books", bookId);
      await updateDoc(bookDocRef, updatedData);
      // Optionally, update state locally:
      setBooks((prev) =>
        prev.map((book) =>
          book.id === bookId ? { ...book, ...updatedData } : book
        )
      );
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  };

  // Function to delete a book
  const deleteBook = async (bookId) => {
    try {
      const bookDocRef = doc(db, "books", bookId);
      await deleteDoc(bookDocRef);
      setBooks((prev) => prev.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Error deleting book: ", error);
    }
  };

  return { books, fetchBooks, addBook, updateBook, deleteBook };
};