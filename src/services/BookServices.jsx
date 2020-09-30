import axios from 'axios';
const getAllBooksURL = 'http://localhost:8080/books/getBooks';
const getAllBookByAutorNameURL='http://localhost:8080/bookStoreApplication/getBookByAuthorName';
const getBookCOuntURL = 'http://localhost:8080/books/getBookCount';
const getBookByPriceAscURL='http://localhost:8080/books/getBooksByPriceAsc';
const getBookByPriceDescURL='http://localhost:8080/books/getBooksByPriceDesc';

export const getAllBooksRequestMethod= async ()=>{
    const response = await axios.get(getAllBooksURL);
    return response;
}

export const getBookCountRequestMethod= async ()=>{
    const response = await axios.get(getBookCOuntURL);
    return response;
}
export const getBookByAuthorName= async ()=>{
    const response = await axios.get(getAllBookByAutorNameURL);
    return response;
}
export const getBookByPriceAsc= async ()=>{
    const response = await axios.get(getBookByPriceAscURL);
    console.log(response)
    return response;
}
export const getBookByPriceDesc= async ()=>{
    const response = await axios.get(getBookByPriceDescURL);
    console.log(response)
    return response;
}
