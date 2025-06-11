import type { BookType } from "../types"
import client from "./client"
import routes from "./routes"

export const getAllBooks = async () => {
    try {
        const res = await client.get(routes.GET_ALL_BOOKS)
        console.log(res.data)
        return res?.data?.data || null
    } catch (err: any) {
        console.log("error fetching books: ", err.message);
        return null
    }
}

export const getBookByID = async (id:number) => {
    try {
        const res = await client.get(`${routes.GET_BOOK_BY_ID}/${id}`)
        return res?.data?.data || null
    } catch (err: any) {
        console.log("error fetching book by id: ", err.message);
        return null
    }
}

export const createBook = async (book: BookType) => {
    try {
        const res = await client.post(routes.CREATE_BOOK, book);
        return res.status
    } catch (err: any) {
        console.log("error creating book: ", err.message);
        return null
    }
}

export const deleteBookByID = async (id:number) => {
    try {
        const res = await client.delete(`${routes.DELETE_BOOK_BY_ID}/${id}`)
        return res.status
    } catch (err: any) {
        console.log("error deleting book by id: ", err.message);
        return null
    }
}


