const prefix = "/api";

const routes = {
    GET_ALL_BOOKS: prefix + "/books",
    GET_BOOK_BY_ID: prefix + "/get_book",
    CREATE_BOOK: prefix + "/create_book",
    DELETE_BOOK_BY_ID: prefix + "/delete_book"
}
export default routes