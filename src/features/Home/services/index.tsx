import type { FormEvent } from "react";
import type { BookType } from "../types";
import { createBook, deleteBookByID, getAllBooks } from "../api";

const fetchBook = async (
  setBookList: (books: BookType[]) => void,
  setBookCount: (bookCount: number) => void
) => {
  const data = await getAllBooks();
  if (data) {
    setBookList(data);
    setBookCount(data.length || 0);
  }
};

export const addNewBook = (
  e: FormEvent,
  bookTitle: string,
  SetBookTitle: (title: string) => void,
  bookAuthor: string,
  setBookAuthor: (author: string) => void,
  bookPublisher: string,
  setBookPublisher: (publisher: string) => void,
  setBookList: (setBookList: BookType[]) => void,
  setBookCount: (setBookCount: number) => void
) => {
  e.preventDefault();
  if (bookTitle && bookAuthor && bookPublisher) {
    const book: BookType = {
      title: bookTitle,
      author: bookAuthor,
      publisher: bookPublisher,
    };
    createBook(book).then(() => {
      fetchBook(setBookList, setBookCount);
    });
    SetBookTitle("");
    setBookAuthor("");
    setBookPublisher("");
  }
};

export const deleteBook = (
  id: number,
  setBookList: (bookList: BookType[]) => void,
  setBookCount: (bookCount: number) => void
) => {
  if (!isNaN(id)) {
    deleteBookByID(id).then(() => {
      fetchBook(setBookList, setBookCount);
    });
  }
};
