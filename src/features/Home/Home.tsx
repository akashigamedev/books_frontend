import { useEffect, useState } from "react";

// Types
import type { BookType } from "./types";

// Http
import { getAllBooks } from "./api";

// Components
import Book from "./components/Book";
import { addNewBook, deleteBook } from "./services";

const Home = () => {
  const [bookCount, setBookCount] = useState<number>(0);
  const [bookList, setBookList] = useState<BookType[]>([]);
  const [bookTitle, SetBookTitle] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [bookPublisher, setBookPublisher] = useState<string>("");

  const fetchBook = async () => {
    const data = await getAllBooks();
    if (data) {
      setBookList(data);
      setBookCount(data.length || 0);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="grid max-w-[1200px] mx-auto pt-8">
      <div className="p-8 text-center flex flex-col gap-2">
        <h1 className="text-3xl font-black leading-tight">Books Library</h1>
        <p className="text-base leading-relaxed">
          Manage your personal book collection
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="w-full col-span-1">
          <div className="bg-slate-800 border-1 border-slate-700 rounded-md p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
            <form
              className="w-full"
              onSubmit={(e) =>
                addNewBook(
                  e,
                  bookTitle,
                  SetBookTitle,
                  bookAuthor,
                  setBookAuthor,
                  bookPublisher,
                  setBookPublisher,
                  setBookList,
                  setBookCount
                )
              }
            >
              <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-sm font-semibold">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={bookTitle}
                    onChange={(e) => SetBookTitle(e.target.value)}
                    placeholder="Enter book title"
                    required
                    className="bg-gray-700 p-2.5 border-1 border-gray-600 rounded-md text-sm min-w-[300px] focus:border-2 focus:border-neutral-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="author" className="text-sm font-semibold">
                    Author *
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    placeholder="Enter author name"
                    required
                    className="bg-gray-700 p-2.5 border-1 border-gray-600 rounded-md text-sm min-w-[300px] focus:border-2 focus:border-neutral-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="publisher" className="text-sm font-semibold">
                    Publisher *
                  </label>
                  <input
                    type="text"
                    name="publisher"
                    value={bookPublisher}
                    onChange={(e) => setBookPublisher(e.target.value)}
                    placeholder="Enter publisher name"
                    required
                    className="bg-gray-700 p-2.5 border-1 border-gray-600 rounded-md text-sm min-w-[300px] focus:border-2 focus:border-neutral-300 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 w-full mt-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
        <div className="w-full col-span-2">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Books</h2>
            <div className="flex items-center gap-1 bg-purple-700 px-4 rounded-4xl">
              <span>{bookCount}</span>
              <span>books</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {bookList?.length > 0 ? (
              bookList?.map((book) => (
                <Book
                  book={book}
                  deleteHandler={(id) =>
                    deleteBook(id, setBookList, setBookCount)
                  }
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
