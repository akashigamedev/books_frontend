import type { BookType } from "../types";

type BookProps = {
  book: BookType;
  deleteHandler: (id: number) => void;
};

const Book = ({ book, deleteHandler }: BookProps) => {
  return (
    <div className="bg-slate-800 border-1 border-slate-700 rounded-md p-6 max-h-[280px] flex flex-col justify-between">
      <div className="flex flex-col gap-2.5 border-b-1 border-b-gray-700 pb-4">
        <h3 className="text-xl font-semibold overflow-hidden text-ellipsis line-clamp-2">
          {book.title}
        </h3>
        <div className="flex gap-2 text-sm items-center mt-2">
          <p className="text-neutral-400 font-medium">Author</p>
          <p className="overflow-hidden text-ellipsis line-clamp-2">
            {book.author}
          </p>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <p className="text-neutral-400 font-medium">Publisher</p>
          <p className="overflow-hidden text-ellipsis line-clamp-2">
            {book.publisher}
          </p>
        </div>
      </div>
      <button
        onClick={() => deleteHandler(book?.id || -1)}
        className="mt-4 bg-red-600 w-full py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
      >
        Delete Book
      </button>
    </div>
  );
};

export default Book;
